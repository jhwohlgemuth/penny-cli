"use strict";require("core-js/modules/es.array.iterator"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _chalk=require("chalk"),_figures=require("figures");/* eslint-disable max-len */const INDENT="    ",note=a=>`\n\n${INDENT}${(0,_chalk.bold)("NOTE")} ${_chalk.bold.dim(_figures.arrowRight)} ${(0,_chalk.dim)(a)}`,tip=a=>`\n\n${INDENT}${_chalk.bold.magenta("TIP")} ${_chalk.bold.magenta(_figures.arrowRight)} ${(0,_chalk.dim)(a)}`,GIBU_TIP=tip(`find other NSE scripts with ${(0,_chalk.bold)("gibu /usr/share/nmap/scripts -fr")}`),suggestions={domain:[{title:"Perform a \"standard\" DNS scan and brute force hostnames with a dictionary",command:({ip:a})=>`${_chalk.bold.green("dnsrecon")} -d ${_chalk.bold.cyan(a)} -D /usr/share/wordlists/dnsmap.txt -t std`},{title:"Enumerate DNS information with dnsenum",command:({ip:a})=>`${_chalk.bold.green("dnsenum")} ${_chalk.bold.cyan(a)}`},{title:"Scan for DNS vulnerabilties with nmap",command:({ip:a})=>`${_chalk.bold.green("nmap")} ${_chalk.bold.cyan(a)} --script "dns-*"${GIBU_TIP}`}],ftp:[{title:"Check for anonymous FTP login (username: \"anonymous\", password: <nothing>)",command:({ip:a,port:b})=>`${_chalk.bold.green("nmap")} ${_chalk.bold.cyan(a)} -p ${_chalk.bold.cyan(b)} --script ftp-anon`}],http:[{title:"Scan web site for vulnerabilties with nikto",command:({ip:a,port:b})=>`${_chalk.bold.green("nikto")} -host ${_chalk.bold.cyan(a)} -port ${_chalk.bold.cyan(b)}`},{title:"Scan web server directories with gobuster",command:({ip:a,port:b})=>`${_chalk.bold.green("gobuster")} dir -w ${_chalk.bold.cyan("/path/to/wordlist")} -u http://${_chalk.bold.cyan(a)}:${_chalk.bold.cyan(b)}`},{title:"Scan web server directories with dirb",command:({ip:a})=>`${_chalk.bold.green("dirb")} http://${_chalk.bold.cyan(a)} ${_chalk.bold.cyan("/path/to/wordlist")}`},{title:"Perform a \"quicklook\" at the website content in your terminal",command:({ip:a,port:b})=>`${_chalk.bold.green("curl")} -s http://${_chalk.bold.cyan(a)}:${_chalk.bold.cyan(b)} | ${_chalk.bold.green("html2text")} -style pretty`},{title:"View colorized header data and website content with httpie",command:({ip:a,port:b})=>`${_chalk.bold.green("http")} ${_chalk.bold.cyan(a)}:${_chalk.bold.cyan(b)}`},{title:"Fingerprint web server with whatweb",command:({ip:a,port:b})=>`${_chalk.bold.green("whatweb")} -a 3 ${_chalk.bold.cyan(a)}:${_chalk.bold.cyan(b)}`},{title:"Take screenshot of server web page and identify default credentials with EyeWitness",command:({ip:a})=>`${_chalk.bold.green("./EyeWitness.py")} -f ${_chalk.bold.cyan("/path/to/hosts")}\n${INDENT}${_chalk.bold.green("./EyeWitness.py")} --single ${_chalk.bold.cyan(a)}`},{title:"Brute force .htaccess directory with medusa",command:({ip:a,user:b})=>`${_chalk.bold.green("medusa")} -h ${_chalk.bold.cyan(a)} -u ${_chalk.bold.cyan(b)} -P ${_chalk.bold.cyan("/path/to/passwords")} -M http -m DIR:/${_chalk.bold.cyan("directory")} -T 10`},{title:"Brute force Wordpress login page with hydra",command:({ip:a,user:b})=>`${_chalk.bold.green("hydra")} -l ${_chalk.bold.cyan(b)} -P ${_chalk.bold.cyan("/path/to/passwords")} ${_chalk.bold.cyan(a)} -V http-form-post '/wp-login.php:${_chalk.bold.cyan("POST header with ^USER^ and ^PASS^")}:F=login_error'`},{title:"Detect WebDAV installations",command:({ip:a,port:b})=>`${_chalk.bold.green("nmap")} ${_chalk.bold.cyan(a)} -p ${_chalk.bold.cyan(b)} --script http-webdav-scan`},{title:"Scan for an IIS 5.1/6.0 WebDAV vulnerability",command:({ip:a,port:b})=>`${_chalk.bold.green("nmap")} ${_chalk.bold.cyan(a)} -p ${_chalk.bold.cyan(b)} --script http-iis-webdav-vuln`},{title:"Determine if enabled DAV services are exploitable",command:({ip:a})=>`${_chalk.bold.green("davtest")} -url http://${_chalk.bold.cyan(a)}`},{title:"Enumerate Wordpress site with wpscan",command:({ip:a})=>`${_chalk.bold.green("wpscan")} --url http://${_chalk.bold.cyan(a)}`},{title:"Brute force Wordpress login page with wpscan",command:({ip:a})=>`${_chalk.bold.green("wpscan")} --url ${_chalk.bold.cyan(a)} --password-attack wp-login --passwords ${_chalk.bold.cyan("/path/to/passwords")}`},{title:"Enumerate Drupal site with droopescan",command:({ip:a})=>`${_chalk.bold.green("droopescan")} scan -u ${_chalk.bold.cyan(a)}`}],msrpc:[// Microsoft Remote Procedure Call
{title:"Enumerate RPC shares with nmap",command:({ip:a})=>`${_chalk.bold.green("nmap")} ${_chalk.bold.cyan(a)} --script msrpc-enum`}],nfs:[// Network File System
{title:"Enumerate NFS with rpcinfo",command:({ip:a})=>`${_chalk.bold.green("rpcinfo")} -p ${_chalk.bold.cyan(a)}`},{title:`Show server's NFS export list`,command:({ip:a})=>`${_chalk.bold.green("showmount")} -a ${_chalk.bold.cyan(a)}`},{title:"Run NFS nmap scripts",command:({ip:a})=>`${_chalk.bold.green("nmap")} ${_chalk.bold.cyan(a)} --script "nfs-*"${GIBU_TIP}`}],"netbios-ssn":[{title:"Enumerate SMB users with nmap",command:({ip:a,port:b})=>`${_chalk.bold.green("nmap")} ${_chalk.bold.cyan(a)} -p ${_chalk.bold.cyan(b)} --script smb-enum-users`},{title:"Enumerate SMB shares with nmap",command:({ip:a,port:b})=>`${_chalk.bold.green("nmap")} ${_chalk.bold.cyan(a)} -p ${_chalk.bold.cyan(b)} --script smb-enum-shares${GIBU_TIP}`},{title:"Enumerate SMB with enum4linux",command:({ip:a})=>`${_chalk.bold.green("enum4linux")} -a ${_chalk.bold.cyan(a)}`},{title:"List SMB shares and connect to one",command:({ip:a,user:b})=>`${_chalk.bold.green("smbclient")} -U ${_chalk.bold.cyan(b)} -L ${_chalk.bold.cyan(`//${a}`)}\n${INDENT}${_chalk.bold.green("smbclient")} -U ${_chalk.bold.cyan(b)} ${_chalk.bold.cyan(`//${a}/path/to/share`)}`},{title:"Attempt SMB null connect",command:({ip:a})=>`${_chalk.bold.green("rpcclient")} -U "" ${_chalk.bold.cyan(a)}`}],oracle:[{title:"Enumerate Oracle server information with oscanner",command:({ip:a,port:b})=>`${_chalk.bold.green("oscanner")} -s ${_chalk.bold.cyan(a)} -P ${_chalk.bold.cyan(b)}`},{title:"Get information from the Oracle TNS listener",command:({ip:a})=>`${_chalk.bold.green("tnscmd10g")} version -h ${_chalk.bold.cyan(a)}${note("the default port is 1521/tcp")}`},{title:"Brute force the Oracle SID with hydra",command:({ip:a})=>`${_chalk.bold.green("hydra")} -L /usr/share/oscanner/lib/services.txt -s 1521 ${_chalk.bold.cyan(a)} oracle-sid`},{title:"Enumerate Oracle users with nmap",command:`${_chalk.bold.green("nmap")} ${_chalk.bold.cyan("$RHOST")} --script oracle-enum-users${GIBU_TIP}`}],smtp:[// Simple Mail Transfer Protocol
{title:"Check for available SMTP commands",command:({ip:a,port:b})=>`${_chalk.bold.green("nmap")} ${_chalk.bold.cyan(a)} -p ${_chalk.bold.cyan(b)} --script smtp-commands`},{title:"Enumerate users with smtp-enum-users and various SMTP commands (VRFY, EXPN, RCPT, etc...)",command:`${_chalk.bold.green("smtp-user-enum")} -M ${_chalk.bold.cyan("COMMAND")} -U ${_chalk.bold.cyan("/path/to/users")} -t ${_chalk.bold.cyan("$RHOST")}`},{title:"Scan for SMTP vulnerabilties with nmap",command:({ip:a})=>`${_chalk.bold.green("nmap")} ${_chalk.bold.cyan(a)} --script "smtp-vuln-*"${GIBU_TIP}`}],snmp:[// Simple Network Management Protocol
{title:"Brute force SNMP community strings",command:`${_chalk.bold.green("onesixtyone")} -i ${_chalk.bold.cyan("/path/to/hosts")} -c ${_chalk.bold.cyan("/path/to/strings")}`},{title:"Enumerate with snmp-check",command:({ip:a})=>`${_chalk.bold.green("snmp-check")} ${_chalk.bold.cyan(a)}`},{title:"Enumerate Windows information with snmpwalk",command:({ip:a})=>`${_chalk.bold.green("snmpwalk")} -c ${_chalk.bold.cyan("community")} -v1 ${_chalk.bold.cyan(a)} ${_chalk.bold.cyan("oid")}`}],ssh:[{title:"Brute force SSH login with hydra",command:({ip:a,user:b})=>`${_chalk.bold.green("hydra")} -l ${_chalk.bold.cyan(b)} -P ${_chalk.bold.cyan("/path/to/password/list")} -f -V ssh://${_chalk.bold.cyan(a)}`},{title:"Search for exploits that apply to the SSH server version",command:`${_chalk.bold.green("searchsploit")} ${_chalk.bold.cyan("version")}`}],"ssl/https":[{title:"Enumerate SSL configuration, check for heartbleed vulnerability, and determine supported SSL ciphers with sslscan",command:({ip:a,port:b})=>`${_chalk.bold.green("sslscan")} ${_chalk.bold.cyan(a)}:${_chalk.bold.cyan(b)}`},{title:"Evaluate the web server SSL/TLS (HTTPS) security with tlssled",command:({ip:a,port:b})=>`${_chalk.bold.green("tlssled")} ${_chalk.bold.cyan(a)} ${_chalk.bold.cyan(b)}`},{title:"Analyze server SSL configuration with \"regular\" sslyze scan",command:({ip:a,port:b})=>`${_chalk.bold.green("sslyze")} --regular ${_chalk.bold.cyan(a)}:${_chalk.bold.cyan(b)}`},{title:"Enumerate SSL ciphers with nmap",command:({ip:a,port:b})=>`${_chalk.bold.green("nmap")} ${_chalk.bold.cyan(a)} -p ${_chalk.bold.cyan(b)} --script ssl-enum-ciphers${GIBU_TIP}`}]};[// Add aliases
["dns","domain"],// Domain Name System
["smb","netbios-ssn"],// Server Message Block
["https","ssl/https"]].forEach(([a,b])=>{suggestions[a]=suggestions[b]});var _default=suggestions;exports.default=_default;