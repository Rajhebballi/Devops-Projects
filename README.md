# 🚀 Terraform VPC + Public Subnet + EC2 + Nginx Project

This project creates a complete AWS network & server setup using Terraform:

- Custom **VPC**
- **Public Subnet**
- **Internet Gateway**
- **Route Table** with internet access
- **Security Group** (SSH + HTTP)
- **EC2 Instance** with Nginx auto-installed
- Fully accessible public webpage

---

## ✅ Architecture Overview

                    +----------------------+
                    |      Internet        |
                    +----------+-----------+
                               |
                +--------------v---------------+
                |    Internet Gateway (IGW)    |
                +--------------+---------------+
                               |
 +-----------------------------v-----------------------------+
 |                        VPC (10.0.0.0/16)                  |
 |                                                           |
 |  +------------------+       +---------------------------+ |
 |  | Public Subnet    |       | Route Table               | |
 |  | 10.0.1.0/24       <------- Default route 0.0.0.0/0   | |
 |  +--------+---------+       | → Internet Gateway        | |
 |           |                 +---------------------------+ |
 |           |                                               |
 |   +-------v--------+                                      |
 |   |  EC2 Instance  |                                      |
 |   | + Nginx        |                                      |
 |   +----------------+                                      |
 |                                                           |
 +-----------------------------------------------------------+

---

## 📁 Project Structure

Terraform-VPC-Project/
│-- main.tf
│-- provider.tf
│-- variables.tf
│-- outputs.tf


---

## 🧩 Features

- Creates a complete VPC setup
- Public subnet with auto-assigned public IP
- Internet access using IGW + route table
- EC2 instance with:
  - Amazon Linux 2 AMI
  - Nginx auto-installed via user_data
  - Custom webpage
- Outputs including public IP & clickable URL

---

## ⚙️ How to Run

### 1. Initialize Terraform

terraform init
2. Validate configuration
terraform validate
3. See the plan
terraform plan
4. Apply (create resources)
terraform apply
Type yes when prompted.

5. View the Nginx website
Terraform will output:


nginx_url = "http://YOUR_PUBLIC_IP"
Open the URL in your browser.

🧹 Clean Up (IMPORTANT)
To delete all resources and avoid charges:

terraform destroy
🔑 Technologies Used
Terraform

AWS VPC, Subnets, IGW, Route Tables

EC2

Security Groups

Nginx (installed via user_data script)

📚 Learning Outcome
By completing this project, you understand:

How cloud networks are designed

How EC2 instances access the internet

How security groups & routing works

How Terraform automates cloud provisioning

Infrastructure-as-Code (IaC) best practices

👨‍💻 Author
Raj — Learning DevOps step by step 🚀

Feel free to fork, modify, or improve this project.