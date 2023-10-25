return {
  ['progress'] = function(args, kwargs, meta)
    local pages = pandoc.utils.stringify(meta["pages"])
    if (pages == nil or pages == "") 
    then
      pages = 0
    end

    local page = pandoc.utils.stringify(meta["page"])
    if (page == nil or page == "") 
    then
      page = 0
    end

    return pandoc.RawBlock("html", "<progress max=" .. pages .. " value=" .. page .."></progress><p>Progress: " .. page .. "/" .. pages .. " pages<p>")
  end
}
