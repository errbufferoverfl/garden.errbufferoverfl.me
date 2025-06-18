---
title: How to Include Media in Anki Cards Using Genanki
aliases:
  - /archive/2021/04/14/til-include-media-in-anki-cards-genanki
subtitle: Today I Learnt
author:
  - errbufferoverfl
date: 2021-04-14T10:20:54+10:30
date-modified: 2024-12-04T10:30:21+10:30
categories:
  - Python Programming
  - Today I Learnt
series: Today I Learnt
draft: true
---

::: {.callout-note}

**03 December 2024**

This blog post has been migrated from **errbufferoverfl.me** to **garden.errbufferoverfl.me**.

:::

Welcome to the first TIL ✌🏻, where I share small lessons I've learned. These generally aren't substantial enough to be fully-featured blog posts but are worth sharing, just in case someone else is tackling the same problem.

![Wisdom of the Ancients](https://images.xkcd.com/comics/wisdom_of_the_ancients.png)

Genanki is a Python package that allows you to programmatically generate decks for Anki, a popular spaced-repetition flashcard program. Recently, I have been working on refactoring a [Python application](https://github.com/errbufferoverfl/pearl-memory) that generates a deck based on a list of words given.

Part of this work involved storing all the image and sound resources to a `tmp/` directory so at the end, cleaning temporary resources was easy. Another important note about this new implementation is it is **Object Oriented (OO)**. So I have two key classes that are of importance to this TIL: [AnkiCard](https://github.com/errbufferoverfl/pearl-memory/blob/f0d89fa4af00acfc7ce599f4892b9b8cc4683637/pearlmemory/AnkiCard.py) and [AnkiDeck](https://github.com/errbufferoverfl/pearl-memory/blob/f0d89fa4af00acfc7ce599f4892b9b8cc4683637/pearlmemory/AnkiDeck.py).

## Downloading and Storing Images

After downloading the image, we store it:

```python
# AnkiCard.py
def __download_image(self, url: str):
    img_data = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
    img_data.raise_for_status()

    # Identify MIME type and then set the extension type
    img_mime_type = mimetypes.guess_type(url.split("?")[0], strict=True)
    img_extension = mimetypes.guess_extension(img_mime_type[0], strict=True)

    # OUTPUT_DIRECTORY = Path("./tmp").absolute()
    img_path = self.OUTPUT_DIRECTORY / "images"
    img_name = f"{slugify(self.translation_dict['de'], separator='_')}{img_extension}"

    img_file = img_path / img_name

    if not img_path.exists():
        os.makedirs(img_path)

    with open(img_file, "wb") as f:
        logging.info(f"Downloading: {img_name}")
        f.write(img_data.content)
        self.__resize_image(img_file)

    return img_file
````

Once an image is saved, for example: `/tmp/images/die_tante.png`, we can continue to do other tasks and finally create an Anki note:

```python
# AnkiDeck.py
def create_notes(self, model: genanki.Model):
    notes = list()
    for card in self.anki_cards:
        notes.append(genanki.Note(
            model=model,
            fields=[card.translation_dict["de"],
                    card.translation_dict["en"],
                    f'<img src="{card.image.name}">',
                    f"[sound:{card.audio.name}]"]))

    return notes
```

## Why Only the Media Name?

When creating the note, we don't use the full path to the media, just the media name. After debugging, I learned that if you use the full path for the media, it won't load (even if the media exists at the provided absolute path). You just need to provide the media name.

An important note is that when creating the media library, you do need to provide the full path to the media:

```python
# AnkiDeck.py
def __build_media_lib(self):
    media = list()
    for card in self.anki_cards:
        media.append(card.image)
        media.append(card.audio)
```

When your deck is created, the media library (`__build_media_lib(self)`) copies the resources into your Anki package, while the card field:

```python
fields=[card.translation_dict["de"],
                    card.translation_dict["en"],
                    f'<img src="{card.image.name}">',
                    f"[sound:{card.audio.name}]"])
```

simply references the media path in the package.

You can observe this by renaming an `.apkg` file to `.zip` and unzipping it. You'll see files named after numbers, e.g., `5988`, `5989`. These are the media files that the cards use. You'll also find a file called `media`, which contains a JSON file mapping images to their original names:

```text
{"5988": "sapi5-c11ad087-de1c62eb-797700be-a324a996-51fe3627.mp3",
 "5989": "sapi5com-1bd3bb72-9bc0090b-9216f53b-d44a2ebe-b8bb1fe8.mp3"}
```

So, in this example, if you locate file `5989` and rename it with the `.mp3` extension, you'll have a working audio file.

To summarize: when these files are saved in the root directory of the `.apkg` and not embedded in the card itself using the absolute path, it makes sense that when adding the card field, you only need to use the name and not the path.
