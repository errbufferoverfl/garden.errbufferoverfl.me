---
title: "TIL: How to Improve Language Detection Using `langdetect`"
subtitle: Today I Learnt
author:
  - errbufferoverfl
date: 2021-04-14T10:15:45+10:30
date-modified: 2025-06-18T15:01:08+09:30
categories:
  - Python Programming
  - Today I Learnt
series: Today I Learnt
---

::: {.callout-note}

**03 December 2024**

This blog post has been migrated from **errbufferoverfl.me** to **garden.errbufferoverfl.me**.

:::

Welcome to the second TIL ✌🏻, where I share small lessons I've learned. These generally aren't substantial enough to be fully-featured blog posts but are worth sharing, just in case someone else is tackling the same problem.

Today I'll be telling you about how you can sometimes improve language detection in a Python package called `langdetect`. If you read the last TIL, you'll know that I have been working on refactoring a [Python application](https://github.com/errbufferoverfl/pearl-memory) that generates a deck based on a list of words given.

![Is it worth the time?](https://images.xkcd.com/comics/is_it_worth_the_time.png)

## The Problem

One of the problems I noticed in my testing is that many words with origins in other languages or ambiguous meanings were often not translated correctly as a result of `langdetect`'s classification and, in part, by my very simple translation generator:

```python
def __translate_word(self, word):
    translation_dict = {"en": "", "de": "", "artikle": ""}

    if detector_factory.detect() == 'en':
        translate_api_url = self.CONFIG.TRANSLATE_API_URL.format('en', 'de')
        translation_dict["en"] = word
        translation_dict["de"] = self.__request_translation(translate_api_url)
    elif detector_factory.detect() == 'de':
        translate_api_url = self.CONFIG.TRANSLATE_API_URL.format('de', 'en')
        translation_dict["de"] = word
        translation_dict["en"] = self.__request_translation(translate_api_url)
    else:
        translate_api_url = self.CONFIG.TRANSLATE_API_URL.format('de', 'en')
        translation_dict["de"] = word
        translation_dict["en"] = self.__request_translation(translate_api_url)

    translation_dict["artikle"] = self.__identify_article(translation_dict["de"])
    return translation_dict
````

One solution I considered was using Google's Detect API to determine the language, but this would likely encounter similar issues to `langdetect`.

Instead, I needed to reduce the problem space. Since I know we will only use two languages, English or German, I could specify that each word is either German or English.

In `langdetect`, we achieve this by creating a new `DetectorFactory` that allows us to specify which languages to use and assign probabilities to each language. This can be helpful if you're more likely to encounter one language than the other.

```python
# The __init__ from langdetect.DetectorFactory
def __init__(self):
    self.word_lang_prob_map = {}
    self.langlist = []
```

## Creating a DetectorFactory

Before we can use our factory, we need to load profiles with `DetectorFactory.load_profile()`. For this code, I used the default profiles, but if you are using an unsupported language, [you can add your own](https://github.com/Mimino666/langdetect#how-to-add-new-language). Here's an example:

```python
def init_detector_factory():
    # instantiate the DetectorFactory
    factory = langdetect.detector_factory.DetectorFactory()

    # load the default profiles
    factory.load_profile(langdetect.detector_factory.PROFILES_DIRECTORY)

    # create the factory
    detector = factory.create()

    # set the information about language probabilities
    detector.set_prior_map({"en": 0.5, "de": 0.5})

    return detector
```

## Updating the `__translate_word()` Method

With our new factory, we can update our `__translate_word()` method:

```python
def __translate_word(self, word):
    translation_dict = {"en": "", "de": "", "artikle": ""}

    detector_factory = init_detector_factory()
    detector_factory.append(word)

    if detector_factory.detect() == 'en':
        translate_api_url = self.CONFIG.TRANSLATE_API_URL.format('en', 'de')
        translation_dict["en"] = word
        translation_dict["de"] = self.__request_translation(translate_api_url)
    elif detector_factory.detect() == 'de':
        translate_api_url = self.CONFIG.TRANSLATE_API_URL.format('de', 'en')
        translation_dict["de"] = word
        translation_dict["en"] = self.__request_translation(translate_api_url)
    else:
        translate_api_url = self.CONFIG.TRANSLATE_API_URL.format('de', 'en')
        translation_dict["de"] = word
        translation_dict["en"] = self.__request_translation(translate_api_url)

    translation_dict["artikle"] = self.__identify_article(translation_dict["de"])
    return translation_dict
```

## Testing with Multiple Words

We can optimize further by creating the factory once and then detecting multiple words like this:

```python
import langdetect

words = ["der Lenz", "the Uncle", "woman", "Wasser"]

# instantiate the DetectorFactory
factory = langdetect.detector_factory.DetectorFactory()

# load the default profiles
factory.load_profile(langdetect.detector_factory.PROFILES_DIRECTORY)

for word in words:
    detector = factory.create()
    detector.set_prior_map({"en": 0.5, "de": 0.5})
    detector_factory.append(word)
    print(f"{word} - {detector_factory.detect()}")
```

## Conclusion

This approach lets you specify a set number of languages and their probabilities when using `langdetect`. It’s a simple but effective way to improve language detection for specific use cases, like translating between two languages. For more complex scenarios or unsupported languages, consider creating custom profiles or exploring alternative solutions.

## Additional Resources

- [Langdetect on GitHub](https://github.com/Mimino666/langdetect)
- [Langdetect: Adding a New Language](https://github.com/Mimino666/langdetect#how-to-add-new-language)
