return {
  ['progress'] = function(args, kwargs, meta)
    -- Extract the total number of pages from the metadata
    local pages = pandoc.utils.stringify(meta["pages"])
    -- If the pages metadata is nil or empty, set pages to 0
    if (pages == nil or pages == "") 
    then
      pages = 0
    end

    -- Extract the current page number from the metadata
    local page = pandoc.utils.stringify(meta["page"])
    -- If the page metadata is nil or empty, set page to 0
    if (page == nil or page == "") 
    then
      page = 0
    end

    -- Return an HTML progress bar with the current progress and a paragraph displaying the progress
    return pandoc.RawBlock("html", "<progress max=" .. pages .. " value=" .. page .."></progress><p>Progress: " .. page .. "/" .. pages .. " pages<p>")
  end
}
