export const macos = {
  name: "macOS Commands",
  import: "/* macOS Terminal Commands */",
  insertTarget: "terminal" as const,
  categories: [
    {
      title: "Working with Files & Directories",
      items: [
        { snippet: "ls -la", desc: "List all files and directories, including hidden ones, with detailed information." },
        { snippet: "cd ~/Documents", desc: "Change the current directory to your Documents folder." },
        { snippet: "pwd", desc: "Print the working directory (shows your current path)." },
        { snippet: "mkdir NewFolder", desc: "Create a new directory named 'NewFolder'." },
        { snippet: "touch index.html", desc: "Create a new empty file or update the timestamp of an existing file." },
        { snippet: "cp -r SourceFolder DestFolder", desc: "Copy a file or directory recursively to a new location." },
        { snippet: "mv oldname.txt newname.txt", desc: "Move or rename a file or directory." },
        { snippet: "rm -rf OldFolder", desc: "Forcefully remove a file or directory recursively (use with caution)." },
        { snippet: "cat file.txt", desc: "Display the contents of a file in the terminal." },
        { snippet: "nano file.txt", desc: "Open a file in the nano text editor." },
      ],
    },
    {
      title: "macOS Specific Utilities",
      items: [
        { snippet: "open .", desc: "Open the current directory in the macOS Finder." },
        { snippet: "open file.pdf", desc: "Open a file with its default macOS application." },
        { snippet: "open -a 'Google Chrome' index.html", desc: "Open a file using a specific application." },
        { snippet: "pbcopy < file.txt", desc: "Copy the contents of a file to the macOS clipboard." },
        { snippet: "pbpaste > pasted.txt", desc: "Paste the contents of the macOS clipboard into a file." },
        { snippet: "mdfind 'search term'", desc: "Search for files using the macOS Spotlight engine." },
        { snippet: "mdls file.txt", desc: "List the metadata attributes associated with a file." },
        { snippet: "say 'Hello world'", desc: "Convert text to audible speech using the macOS text-to-speech engine." },
        { snippet: "screencapture -i screenshot.png", desc: "Take an interactive screenshot and save it to a file." },
        { snippet: "caffeinate -u -t 3600", desc: "Prevent the Mac from sleeping for a specified number of seconds (e.g., 3600s = 1 hour)." },
      ],
    },
    {
      title: "System & Process Management",
      items: [
        { snippet: "top -o cpu", desc: "Display running processes, sorted by CPU usage." },
        { snippet: "ps aux", desc: "Display a snapshot of all currently running processes." },
        { snippet: "kill -9 <PID>", desc: "Forcefully terminate a process by its Process ID." },
        { snippet: "killall 'Safari'", desc: "Kill all processes associated with a specific application name." },
        { snippet: "system_profiler SPSoftwareDataType", desc: "Display detailed macOS system and software information." },
        { snippet: "pmset -g", desc: "Display the current power management settings." },
        { snippet: "sudo shutdown -r now", desc: "Restart the Mac immediately (requires admin password)." },
      ],
    },
    {
      title: "Networking",
      items: [
        { snippet: "ping google.com", desc: "Test network connection and latency to a specific host." },
        { snippet: "ifconfig", desc: "Display active network interfaces and IP addresses." },
        { snippet: "lsof -i :8080", desc: "List processes that are listening on a specific network port (e.g., 8080)." },
        { snippet: "curl -O <URL>", desc: "Download a file from a URL and save it with its original name." },
        { snippet: "networksetup -listallhardwareports", desc: "List all hardware network ports and their device names (e.g., en0, en1)." },
      ],
    },
    {
      title: "Development & Package Management",
      items: [
        { snippet: "xcode-select --install", desc: "Install the Xcode Command Line Tools (compilers, git, etc.)." },
        { snippet: "xcrun swift", desc: "Run the Swift REPL (Read-Eval-Print Loop) for quick Swift coding." },
        { snippet: "brew install <package_name>", desc: "Install a package using Homebrew (macOS package manager)." },
        { snippet: "brew update && brew upgrade", desc: "Update Homebrew itself, then upgrade all installed packages." },
        { snippet: "python3 -m venv venv", desc: "Create a Python virtual environment in the current directory." },
      ],
    },
  ],
};