export const linux = {
  name: "Linux Commands",
  import: "/* Linux Terminal Commands */",
  insertTarget: "terminal" as const,
  categories: [
    {
      title: "File & Directory Operations",
      items: [
        { snippet: "ls -lah", desc: "List all files and directories in long format, with human-readable file sizes." },
        { snippet: "cd /var/log", desc: "Change the current directory to the system logs folder." },
        { snippet: "mkdir -p ./new/nested/folder", desc: "Create a directory and any necessary parent directories." },
        { snippet: "cp -r source_dir dest_dir", desc: "Copy a directory and its contents recursively." },
        { snippet: "mv old_name new_name", desc: "Move or rename files and directories." },
        { snippet: "rm -rf target_dir", desc: "Forcefully remove a directory and its contents (use with extreme caution)." },
        { snippet: "tar -czvf archive.tar.gz folder/", desc: "Compress a folder into a gzip tar archive." },
        { snippet: "tar -xzvf archive.tar.gz", desc: "Extract a gzip tar archive." },
        { snippet: "chmod +x script.sh", desc: "Make a file executable." },
        { snippet: "chown user:group file.txt", desc: "Change the owner and group of a file." },
      ],
    },
    {
      title: "System & Process Management",
      items: [
        { snippet: "htop", desc: "Open an interactive process viewer (if installed, otherwise use 'top')." },
        { snippet: "ps aux | grep process_name", desc: "Search for a specific running process." },
        { snippet: "kill -9 <PID>", desc: "Forcefully terminate a process using its Process ID." },
        { snippet: "systemctl status <service>", desc: "Check the status of a systemd service (e.g., docker, nginx)." },
        { snippet: "sudo systemctl restart <service>", desc: "Restart a systemd service." },
        { snippet: "journalctl -xe", desc: "View the end of the systemd journal logs for troubleshooting." },
        { snippet: "df -h", desc: "Display disk space usage in human-readable format." },
        { snippet: "free -m", desc: "Display the total, used, and free memory (RAM) in megabytes." },
        { snippet: "uname -r", desc: "Print the current Linux kernel release." },
      ],
    },
    {
      title: "Package Management",
      items: [
        { snippet: "sudo apt update && sudo apt upgrade", desc: "Update package lists and upgrade all installed packages." },
        { snippet: "sudo apt install <package_name>", desc: "Install a new software package from the repositories." },
        { snippet: "sudo apt remove --purge <package_name>", desc: "Remove a package and its configuration files." },
        { snippet: "sudo apt autoremove", desc: "Remove automatically installed packages that are no longer needed." },
        { snippet: "flatpak search <app_name>", desc: "Search for an application in the Flatpak repositories." },
        { snippet: "flatpak install flathub <app_id>", desc: "Install an application using Flatpak." },
      ],
    },
    {
      title: "Networking",
      items: [
        { snippet: "ip a", desc: "Show all IP addresses and network interfaces." },
        { snippet: "ping -c 4 google.com", desc: "Send exactly 4 ping requests to test network connectivity." },
        { snippet: "wget <URL>", desc: "Download a file directly from a URL." },
        { snippet: "curl -I <URL>", desc: "Fetch only the HTTP headers of a URL." },
        { snippet: "ss -tuln", desc: "Display all listening TCP and UDP ports." },
        { snippet: "ssh user@hostname_or_ip", desc: "Connect to a remote server securely via SSH." },
      ],
    },
    {
      title: "Search & Text Processing",
      items: [
        { snippet: "find . -name '*.txt'", desc: "Find all files ending in .txt within the current directory and subdirectories." },
        { snippet: "grep -r 'search_string' /path/to/search", desc: "Recursively search for a string inside files in a specific directory." },
        { snippet: "cat file.txt | less", desc: "View the contents of a long file page by page." },
        { snippet: "tail -f /var/log/syslog", desc: "Continuously watch the end of a log file as it updates." },
      ],
    },
    {
      title: "Development Tools",
      items: [
        { snippet: "g++ main.cpp -o main && ./main", desc: "Compile a C++ file using GCC and run the resulting executable." },
        { snippet: "python3 -m http.server 8000", desc: "Quickly start a local web server in the current directory on port 8000." },
        { snippet: "git log --oneline --graph", desc: "View a concise, graphical representation of the Git commit history." },
      ],
    },
  ],
};