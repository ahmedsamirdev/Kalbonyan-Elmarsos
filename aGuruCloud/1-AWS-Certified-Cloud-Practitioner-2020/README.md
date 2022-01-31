### Course Notes..

</br>

**Cloud Computing** is on-demand delivery of IT resources over the Internet with pay-as-you-go pricing.

**Types of Cloud Computing**:

- Infrastructure as a service (IAAS).
- Platform as a service (PAAS).
- Software as a service (SAAS).

</br>

### Cloud Concepts and Technology

**IAM (Identify Access Management)** you create a user or a group, these are created globally.

**S3 (Simple Storage Service)** is used for storing flat files, like pictures, documents, videos, etc. You don't install an operating system or database on it.

**EC2 (Elastic Compute Cloud)** is a web service that provides resizable compute capacity in the cloud.

**EC2 Licensing** :

- On Demand: Pay by the second/hour depending on instance type.
- Reserved: Pay more up front with on to three year commitments, save more than on-demand plan.
- Spot: run whenever capacity is available and the maximum price per hour for your request exceeds the spot price.
- Dedicated host: used for special licensing requirements.

**CloudFront** is CDN which is a system of distributed servers that deliver webpages and contents based on geographic locations.

**ElastiCache** improve performance of web application of existing databases, supports caching engines: Memcached - Redis.

**AWS Databases Types**:

- (RDS): SQL - MySQL - PostgreSQL -  Oracle - Aurora - MariaDB.
- DynamoDB (No SQL)
- Red Shift OLAP is used for analytics processing.

**Autoscalling** allows you to provision multiple EC2 instances behind a load balancer automatically depending on your demand.

**Elastic Beanstalk** helps you to create the infrastructure to support our code. So with the Elastic Beanstalk, you just you basically upload your code.

**CloudFormation** helps you model and set up your AWS resources so that you spend less time
managing those resources and more time focusing on your applications in AWS
and you just create a template. The template is a JSON template,
and it describes all the AWS resources that you want, like your EC2 instances,
RDS instances.

**Cloud Watch** is used for monitoring performance.

**AWS Systems Manager** can be used to manage fleets of EC2 instances and virtual machines.

**Global Accelerator** is a service in which you create accelerators to improve availability and performance of your applications for local and global users, importing user performance by up to 60%.

</br>

### Billing & Pricing

 **Billing Alarms** will alert you automatically when a certain level of AWS spend has been reached. 

**Capex stands** for Capital Expenditure which where you pay up front. It's fixed, sunk cost.

**Opex stands** for Operational Expenditure which is where you pay for what you use. Think of utility billing such as water.


**AWS Landing Zone** is a solution that helps customers more quickly set up a secure, multi-account AWS environment based on AWS best practices.


**The free amazon services**:

- Amazon VPC
- Elastic Beanstalk.
- CloudFormation.
- Identity Access Management (IAM).
- Auto Scaling.
- Opsworks.
- Consolidated Billing.

**AWS Simple Monthly Calculator**: used to calculate your running costs on AWS per month basis.

</br>

### Security In The Cloud

**AWS Compliance** security standards and compliance certifications to check how safe to store info, receive payments on AWS platform.

**AWS Artifact** is used to retrieve compliance reports.

**Shared Responsibility Model**  AWS manages security of the cloud and the security in the cloud is the customer responsibility (applications, content, systems and networks).

**AWS WAF** is a web application firewall, designed to stop hackers.

**AWS Shield** is a DDOS mitigation service designed to stop DDOS attacks, on by default.

**AWS Inspector** is used for inspecting EC2 instances for vulnerabilites.

**AWS Trusted advisor** inspects your AWS account as a whole not just EC2. It does more than just security checks.

**Athena** is used for analyse AWS cost and query log files stored in S3 and generate business reports on data stored in S3.

**Macie** is security service which uses machine learning to discover and protect sensitive data (personal identifiable information) stored in S3 to prevent ID theft.

</br>

### Advanced AWS Concepts

**AI Services**:

- **Lex**: A service that allows you to build conversational chatbots, by voice and text.
- **Polly**: A service that converts text to life-like voice, choose between different languages and accents.
- **Transcribe**: Convert speech into text, like generating subtitles or getting transcripts of interviews.
- **Rekognition**: Upload an image of a leaf and the app uses Rekognition to identify what plant it is based on the picture.

**VPC (Virtual Private Cloud)**: isolated section of AWS cloud where you can launch AWS resources in virtual network you define, including your own ip address range, subnets, 

**AWS Direct Connect** can establish private connectivity between AWS and your data center which reduce your network costs.

**VPN over Direct Connect** For ultimate security, you will get dedicated line to AWS and encrypted traffic over the Direct Connect connection with a VPN.

**AWS Lambda** is compute service where you can upload your code and create a lambda function, it takes care of provisioning and managing the servers you use to run the code.

---
**Course Link:** [AWS Certified Cloud Practitioner 2020](https://learn.acloud.guru/course/aws-certified-cloud-practitioner)

<h5><a href="#certificate"></a>Certificate</h5>
<p align="center">
  <img  src="https://imagizer.imageshack.com/img922/7224/Nl0enG.png" width="700">
</p>

