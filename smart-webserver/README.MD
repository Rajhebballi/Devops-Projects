# 🔧 Smart Webserver Setup Using Ansible Facts & Conditionals

A fully automated Ansible project that configures web servers intelligently using **facts**, **conditionals**, and **OS detection**.  
It works on **Ubuntu/Debian** and **CentOS/RedHat** systems using a *single* playbook.

---

## 🚀 Project Overview

This project demonstrates how to use:

- ✔ Ansible Facts (`ansible_facts`)
- ✔ Conditionals (`when`)
- ✔ OS-based package installation
- ✔ Resource-based decisions (RAM, CPU)
- ✔ Automatic service management (Apache/httpd)

The playbook automatically:

| Detected OS | Installed Web Server |
|-------------|-----------------------|
| Ubuntu/Debian | `apache2` |
| RedHat/CentOS | `httpd` |

It also performs logic based on RAM and CPU counts and creates directories only when conditions match.

---

## 🧱 Folder Structure

smart-webserver/
│
├── hosts
├── vars.yml
└── playbook.yml

yaml
Copy code

---

## 📌 Prerequisites

- Ansible installed on controller machine  
- SSH access to the target server  
- PEM key (for AWS EC2)

Make your key readable:
chmod 400 ansible-key.pem
📝 Inventory File (hosts)
ini
Copy code
[all]
server1 ansible_host=YOUR_SERVER_IP ansible_user=ubuntu ansible_private_key_file=ansible-key.pem
🛠 Variables (vars.yml)
yaml
Copy code
performance_threshold_cpu: 2
memory_threshold_mb: 2000
           
📜 Main Playbook (playbook.yml)
---
- name: Smart Webserver Setup Using Facts & Conditionals
  hosts: all
  become: yes

  vars_files:
    - vars.yml

  tasks:

    # 1️⃣ SHOW BASIC FACTS
    - name: Show server facts
      debug:
        msg:
          - "OS Family: {{ ansible_os_family }}"
          - "Distribution: {{ ansible_distribution }}"
          - "Total RAM: {{ ansible_memtotal_mb }} MB"
          - "CPU Count: {{ ansible_processor_count }}"

    # 2️⃣ INSTALL WEB SERVER BASED ON OS

    - name: Install Apache on Ubuntu/Debian
      apt:
        name: apache2
        state: present
        update_cache: yes
      when: ansible_os_family == "Debian"

    - name: Install httpd on RedHat/CentOS
      yum:
        name: httpd
        state: present
      when: ansible_os_family == "RedHat"

    # 3️⃣ ENABLE SERVICE

    - name: Enable & Start Apache2 (Debian)
      service:
        name: apache2
        state: started
        enabled: yes
      when: ansible_os_family == "Debian"

    - name: Enable & Start httpd (RedHat)
      service:
        name: httpd
        state: started
        enabled: yes
      when: ansible_os_family == "RedHat"

    # 4️⃣ CONDITIONAL BASED ON MEMORY

    - name: Create high memory folder if RAM > 2GB
      file:
        path: /opt/high_memory
        state: directory
      when: ansible_memtotal_mb > memory_threshold_mb

    # 5️⃣ CONDITIONAL BASED ON CPU

    - name: Enable performance mode if CPU > threshold
      debug:
        msg: "Performance mode enabled!"
      when: ansible_processor_count > performance_threshold_cpu
▶️ Running the Playbook
1. Test connection:
bash
Copy code
ansible -i hosts all -m ping

2. Execute full playbook:
ansible-playbook -i hosts playbook.yml
✔️ Expected Output
You will see:

OS information

RAM & CPU count

Apache or httpd installed depending on OS

/opt/high_memory created only if RAM > 2GB

Performance mode message if CPU > 2 cores

Once completed, Apache will be running and visible at:


http://YOUR_SERVER_IP
🎯 What You Learn From This Project
How Ansible collects and uses system facts

How to write conditional logic with when

How to deploy cross-platform automation

How to manage services and packages automatically

How to make infrastructure “smart”

This is an interview-quality DevOps project showing real automation skills.

⭐ Author
Made by Raj (DevOps Learner) with ChatGPT’s assistance.

📜 License
This project is free to use, modify, and publish.
