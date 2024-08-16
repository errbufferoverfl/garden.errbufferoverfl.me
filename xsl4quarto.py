import os
import glob


def attach_xsl_to_xml(xml_file_path, xsl_file_name):
    """
    Attach an XSL file to the XML file if it's not already attached.
    """
    # Read the XML file
    with open(xml_file_path, 'r', encoding='utf-8') as file:
        xml_content = file.read()

    # Check if the XSL processing instruction is already present
    if f'<?xml-stylesheet type="text/xsl" href="{xsl_file_name}"?>' in xml_content:
        print(f'Skipping {xml_file_path} as it already has the XSL processing instruction.')
        return

    # XSL processing instruction
    xsl_instruction = f'<?xml-stylesheet type="text/xsl" href="{xsl_file_name}"?>\n'

    # Insert the processing instruction after the XML declaration
    modified_xml_content = xml_content.replace('<?xml version="1.0" encoding="UTF-8"?>', f'<?xml version="1.0" encoding="UTF-8"?>\n{xsl_instruction}', 1)

    # Write the modified XML back to the file
    with open(xml_file_path, 'w', encoding='utf-8') as file:
        file.write(modified_xml_content)
    print(f'Attached {xsl_file_name} to {xml_file_path}')


def main():
    # Directory where the Quarto output files are located
    output_dir = 'public'  # Adjust this if your output directory is different

    # Define the specific files and their corresponding XSL files
    xsl_mapping = {
        'sitemap.xml': 'assets/sitemap.xsl',
        'bob.xml': 'assets/rss.xsl'
    }

    # Find all XML files in the output directory
    xml_files = glob.glob(os.path.join(output_dir, '*.xml'))

    # Attach XSL to each XML file found based on the mapping
    for xml_file in xml_files:
        file_name = os.path.basename(xml_file)
        if file_name in xsl_mapping:
            attach_xsl_to_xml(xml_file, xsl_mapping[file_name])


if __name__ == '__main__':
    main()
