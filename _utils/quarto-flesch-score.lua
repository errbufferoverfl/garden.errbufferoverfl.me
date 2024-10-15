local function countSyllables(word)
    word = word:lower()
    local syllableCount = 0

    -- List of vowel patterns in a word
    local vowelPatterns = {"a", "e", "i", "o", "u", "y"}

    -- Count occurrences of vowel patterns
    for _, vowel in ipairs(vowelPatterns) do
        syllableCount = syllableCount + select(2, word:gsub(vowel, vowel))
    end

    -- Adjustments for silent vowels and other patterns
    if word:sub(-1) == "e" then
        syllableCount = syllableCount - 1
    end
    if word:find("[aeiouy][aeiouy]") then
        syllableCount = syllableCount - 1
    end
    if syllableCount == 0 then
        syllableCount = 1
    end

    return syllableCount
end

local function calculateFleschReadingEase(text)
    local totalSentences = 0
    local totalWords = 0
    local totalSyllables = 0

    -- Split text into sentences
    for sentence in text:gmatch("[^%.!?]+") do
        totalSentences = totalSentences + 1

        -- Split sentence into words
        for word in sentence:gmatch("%w+") do
            totalWords = totalWords + 1
            totalSyllables = totalSyllables + countSyllables(word)
        end
    end

    -- Calculate Flesch Reading Ease score
    local averageWordsPerSentence = totalWords / totalSentences
    local averageSyllablesPerWord = totalSyllables / totalWords
    local fleschScore = 206.835 - (1.015 * averageWordsPerSentence) - (84.6 * averageSyllablesPerWord)

    return fleschScore
end

-- Function to convert the Flesch score into a readability level
local function getReadabilityLevel(score)
    if score >= 90 then
        return "very easy to read"
    elseif score >= 80 then
        return "easy to read"
    elseif score >= 70 then
        return "fairly easy to read"
    elseif score >= 60 then
        return "plain English"
    elseif score >= 50 then
        return "fairly difficult to read"
    elseif score >= 30 then
        return "difficult to read"
    elseif score >= 10 then
        return "very difficult to read"
    else
        return "extremely difficult to read"
    end
end

-- Variable to store the text content
local textContent = ""

-- Filter to collect all text
function Str(el)
    textContent = textContent .. el.text .. " "
    return el
end

-- At the end of the document, calculate and insert the Flesch Reading Ease score into the 'quarto-title-meta' div
function Pandoc(doc)
    -- Check if the document contains 'disable_flesch' metadata and skip if true
    if doc.meta.disable_flesch and doc.meta.disable_flesch == true then
        return doc  -- Skip the Flesch calculation
    end

    -- Calculate Flesch Reading Ease if not disabled
    local fleschScore = calculateFleschReadingEase(textContent)
    local readabilityLevel = getReadabilityLevel(fleschScore)

    -- HTML structure for the readability output with custom formatting
    local fleschResult = string.format(
        '<h2 class="anchored quarto-heading" id="readability">Readability<a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#readability" style="font: 1em / 1 anchorjs-icons; margin-left: 0.1875em; padding-right: 0.1875em; padding-left: 0.1875em;"></a></h2>\n' ..
        '<div class="custom-readability-meta">\n' ..
        '  <p>This post has a Flesch Reading Ease score of <strong>%0.2f</strong>, indicating that it is <strong>%s</strong> for most readers.</p>\n' ..
        '</div>',
        fleschScore, readabilityLevel
    )

    -- Inject the Flesch result into the 'quarto-title-meta' div
    for i, block in ipairs(doc.blocks) do
        if block.t == "RawBlock" and block.format == "html" and block.text:match('<div class="quarto-title-meta">') then
            -- Find the closing div tag for the title meta section
            doc.blocks[i].text = block.text:gsub("</div>%s*</div>", fleschResult .. "\n</div>\n</div>")
            return doc
        end
    end

    -- If no 'quarto-title-meta' div is found, add the Flesch score at the end
    table.insert(doc.blocks, pandoc.RawBlock("html", fleschResult))
    return doc
end
