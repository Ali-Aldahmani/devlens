export const cmdw = {
  name: "Command-line Windows",
  import: "/* Command-line Windows */",
  insertTarget: "terminal" as const,
  categories: [
    {
      title: "Working with files",
      items: [
        { snippet: "COPY file.txt D:\\Backup", desc: "Copies files to another location" },
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
        { snippet: "RENAME oldname.txt newname.txt", desc: "Renames a file or directory" },
        { snippet: "TYPE file.txt", desc: "Displays the contents of a text file" },
        { snippet: "ATTRIB +h file.txt", desc: "Displays or changes file attributes" },
      ],
    },
    {
      title: "System Management",
      items: [
        { snippet: "TASKLIST", desc: "Displays all currently running tasks" },
        { snippet: "TASKKILL /F /IM notepad.exe", desc: "Kills a running process or application" },
        { snippet: "SYSTEMINFO", desc: "Displays detailed configuration information about the computer and its operating system" },
        { snippet: "SHUTDOWN /s /t 0", desc: "Shuts down the computer" },
        { snippet: "SFC /scannow", desc: "Scans and replaces corrupted system files" },
      ],
    },
    {
      title: "Networking",
      items: [
        { snippet: "IPCONFIG /all", desc: "Displays all current TCP/IP network configuration values" },
        { snippet: "PING google.com", desc: "Tests connectivity to another network device" },
        { snippet: "TRACERT google.com", desc: "Traces the route packets take to a network host" },
        { snippet: "NETSTAT -a", desc: "Displays active TCP connections and listening ports" },
        { snippet: "NSLOOKUP google.com", desc: "Displays information to diagnose DNS infrastructure" },
      ],
    },
    {
      title: "Disk Management",
      items: [
        { snippet: "CHKDSK C: /f", desc: "Checks a disk and displays a status report, and fixes errors" },
        { snippet: "DISKPART", desc: "Opens the disk partition management tool" },
        { snippet: "FORMAT D: /FS:NTFS", desc: "Formats a disk for use with Windows" },
        { snippet: "VOL C:", desc: "Displays the disk volume label and serial number" },
      ],
    },
    {
      title: "General & Environment",
      items: [
        { snippet: "CLS", desc: "Clears the command prompt screen" },
        { snippet: "ECHO Hello World", desc: "Displays messages, or turns command echoing on or off" },
        { snippet: "SET", desc: "Displays, sets, or removes cmd.exe environment variables" },
        { snippet: "HELP DIR", desc: "Provides Help information for Windows commands" },
        { snippet: "EXIT", desc: "Quits the CMD.EXE program (command interpreter)" },
      ],
    },
  ],
};