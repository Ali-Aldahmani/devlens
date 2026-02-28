export const cmdw = {
  name: "Command-line Windows",
  import: "/* Command-line Windows */",
  categories: [
    {
      title: "Working with files",
      items: [
        { snippet: "COPY file.txt D:Backup", desc: "Copies files to another location" },
        { snippet: "DIR C:\\Users", desc: "Displays files and folders in the current directory" },
        { snippet: "DEL oldfile.txt", desc: "Deletes files" },
        { snippet: "EDIT file.txt", desc: "Starts the text editor" },
        { snippet: "CD C:\\Windows", desc: "Changes the current directory" },
        { snippet: "EXPAND archive.cab -F:* C:\\Extracted", desc: "Decompresses compressed files" },
        { snippet: "FC file1.txt file2.txt", desc: "Compares files and shows differences" },
        { snippet: "MD NewFolder", desc: "Creates a new folder" },
        { snippet: "MOVE file.txt D:\\Docs", desc: "Moves files from one folder to another" },
        { snippet: "PRINT file.txt", desc: "Prints the contents of a text file" },
        { snippet: "RMDIR OldFolder", desc: "Deletes a folder" },
      ],
    },
  ],
};