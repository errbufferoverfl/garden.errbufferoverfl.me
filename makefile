# Variables
QUARTO = quarto
SOURCE_DIR = .
OUTPUT_DIR = public
PYTHON_SCRIPT = python3 _utils/generate_quarto.py

# Default target
all: render

# Render all Quarto files
render: generate_quarto
	@echo "Rendering Quarto files..."
	$(QUARTO) render $(SOURCE_DIR)

# Clean output directory
clean:
	@echo "Cleaning up..."
	rm -rf $(OUTPUT_DIR)

# Watch for changes and re-render
watch: generate_quarto
	@echo "Watching files for changes..."
	$(QUARTO) preview

# Render and publish to GitHub Pages
publish: render
	@echo "Publishing to GitLab Page..."
	git add .
	git commit -m "Publishing updates"
	git push origin main

# Run the Python script to generate _quarto.yml
generate_quarto:
	@echo "Generating _quarto.yml using Python script..."
	$(PYTHON_SCRIPT)

# Help
help:
	@echo "Makefile for Quarto Project"
	@echo "Usage:"
	@echo "  make render    - Render the Quarto project"
	@echo "  make clean     - Clean the output directory"
	@echo "  make watch     - Watch for file changes and render"
	@echo "  make publish   - Render and publish to GitLab Pages"
	@echo "  make help      - Display this help"

.PHONY: all render clean watch publish generate_quarto help
