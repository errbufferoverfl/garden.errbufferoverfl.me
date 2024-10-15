import os

# List of YAML files to concatenate in the correct order
yaml_files = [
    "_config/project.yml",
    "_config/execute.yml",
    "_config/website.yml",
    "_config/format.yml",
    "_config/filters.yml"
]

# Output file
output_file = "_quarto.yml"

# Concatenate all files into _quarto.yml
with open(output_file, "w") as outfile:
    for fname in yaml_files:
        with open(fname) as infile:
            outfile.write(infile.read())
            outfile.write("\n")
print(f"Successfully concatenated {len(yaml_files)} files into {output_file}")
