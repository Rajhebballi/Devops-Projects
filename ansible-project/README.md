🚀 Ansible Roles Project – Complete Server Setup (Beginner Friendly)

This project demonstrates how to configure an Ubuntu server using Ansible Roles.
It includes installing and starting nginx, creating a new user, and configuring a simple firewall rule.

Everything is organized using roles, which makes the project clean, reusable, and professional.

📦 Project Structure
ansible-project/
│
├── hosts
├── site.yml
│
└── roles/
    ├── nginx/
    │   └── tasks/main.yml
    ├── users/
    │   └── tasks/main.yml
    └── firewall/
        └── tasks/main.yml

🤖 What This Project Does
✔ Installs and starts nginx
✔ Creates a new Linux user named devops
✔ Opens firewall port 80 (HTTP)
✔ Uses Ansible roles for clean, modular automation
🧠 Concepts Explained (Simple & Clear)
⭐ What are Ansible Roles?

Think of roles like small boxes, each containing steps for one job:

nginx → Everything related to nginx

users → Everything related to user management

firewall → Everything related to firewall rules

Roles help keep your project organized and make tasks reusable.

🌍 hosts File – How Ansible Finds the Server

This file tells Ansible where to connect and which key to use:

[web]
13.60.41.252 ansible_user=ubuntu ansible_ssh_private_key_file=ansible-key.pem


It’s like giving Ansible a map to your server.

▶️ site.yml – How the Playbook Runs All Roles

This is the main playbook:

---
- name: Complete Server Setup using Roles
  hosts: web
  become: yes

  roles:
    - roles/nginx
    - roles/users
    - roles/firewall


It tells Ansible:

Connect to the web server

Become root (become: yes)

Run all 3 roles in order

🏗️ Inside Each Role
🔹 roles/nginx/tasks/main.yml
- name: Install nginx
  apt:
    name: nginx
    state: present
    update_cache: yes
  become: yes

- name: Ensure nginx is running
  service:
    name: nginx
    state: started
    enabled: yes

🔹 roles/users/tasks/main.yml
- name: Create DevOps user
  user:
    name: devops
    state: present
    shell: /bin/bash
  become: yes

🔹 roles/firewall/tasks/main.yml
- name: Allow port 80 in UFW firewall
  ufw:
    rule: allow
    port: "80"
    proto: tcp
  become: yes

🏃 How to Run This Project
1️⃣ Check connection to server
ansible -i hosts web -m ping


If you see pong, the connection works.

2️⃣ Run the full playbook
ansible-playbook -i hosts site.yml


Ansible will:

Install nginx

Start nginx

Create the devops user

Add firewall rule

🧩 Troubleshooting Example: Why nginx Failed at First

During setup, nginx failed with:

bind() to 0.0.0.0:80 failed (98: Address already in use)


This means Apache2 was already using port 80.

Fix:

sudo systemctl stop apache2
sudo systemctl disable apache2


After freeing port 80, nginx worked correctly.

This is exactly how DevOps engineers debug issues in real life.

💡 Why This Project Is Great for Your Resume

✔ Shows understanding of Ansible roles
✔ Demonstrates clean automation structure
✔ Includes real troubleshooting (Apache blocking port 80)
✔ Shows practical server configuration skills
✔ Perfect beginner DevOps project

🎉 Conclusion

This project uses Ansible roles to automate:

Web server setup

User creation

Firewall configuration

It follows best practices and is easy to expand — you can add more roles like:

mysql

docker

nodejs

security
