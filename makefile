# Variables
QUARTO = quarto
SOURCE_DIR = .
OUTPUT_DIR = _site

# Default target
all: render

# Render all Quarto files
render:
	@echo "Rendering Quarto files..."
	$(QUARTO) render $(SOURCE_DIR)

# Clean output directory
clean:
	@echo "Cleaning up..."
	rm -rf $(OUTPUT_DIR)

# Watch for changes and re-render
watch:
	@echo "Watching files for changes..."
	$(QUARTO) preview

# Render and publish to GitHub Pages
publish: render
	@echo "Publishing to GitHub Pages..."
	git add .
	git commit -m "Publishing updates"
	git push origin main

# Help
help:
	@echo "Makefile for Quarto Project"
	@echo "Usage:"
	@echo "  make render    - Render the Quarto project"
	@echo "  make clean     - Clean the output directory"
	@echo "  make watch     - Watch for file changes and render"
	@echo "  make publish   - Render and publish to GitHub Pages"
	@echo "  make help      - Display this help"

.PHONY: all render clean watch publish help
