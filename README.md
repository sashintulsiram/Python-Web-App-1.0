# Python-Web-App-1.0
 This project was developed according to the Full Stack Development Challenge - it was developed using Python, MySQL, React and a custom developed REST API using Python. Please note that this ReadMe was compiled and tested on a Windows 11 Operating System. 

Please refer to the Documentation folder with contains a Word Document named "Sashin Tulsiram - Full Stack Developer Challenge - ReadMe". 


# Table of Contents {#table-of-contents .TOC-Heading}

[Introduction [2](#introduction)](#introduction)

[Application Prerequisites
[2](#application-prerequisites)](#application-prerequisites)

[Set Up MySQL Server [2](#set-up-mysql-server)](#set-up-mysql-server)

[Set up MySQL Workbench and import database
[4](#set-up-mysql-workbench-and-import-database)](#set-up-mysql-workbench-and-import-database)

[Install NodeJS 20.5.1
[9](#install-nodejs-20.5.1)](#install-nodejs-20.5.1)

[Install Python 3.11.x
[9](#install-python-3.11.x)](#install-python-3.11.x)

[Clone the GitHub repository
[10](#clone-the-github-repository)](#clone-the-github-repository)

[Create a virtual environment
[10](#create-a-virtual-environment)](#create-a-virtual-environment)

[Test Web Application
[11](#test-web-application)](#test-web-application)

[Start Web Application
[11](#start-web-application)](#start-web-application)

[Illustration of Web Application
[12](#illustration-of-web-application)](#illustration-of-web-application)

[Contact Information [16](#contact-information)](#contact-information)

# Introduction

This project was developed according to the Full Stack Development
Challenge - it was developed using Python, MySQL, React and a custom
developed REST API using Python. Please note that this ReadMe was
compiled and tested on a Windows 11 Operating System.

# Application Prerequisites 

## Set Up MySQL Server

1.  Download and install: <https://dev.mysql.com/downloads/mysql/>

2.  Select the option for server as shown below then click "Next".

![](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image3.png){width="6.268055555555556in"
height="5.3in"}

3.  Click Next until the installation and finished.

4.  A configuration wizard for the database will appear thereafter. Use
    the default settings for networking.

![](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image4.png){width="6.268055555555556in"
height="5.3805555555555555in"}

5.  For account and roles, enter the below root password:

    a.  Root password: Fu11St@ckCh@113ng3

![A screenshot of a computer Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image5.png){width="6.268055555555556in"
height="5.305555555555555in"}

6.  Thereafter, click next until the configuration has completed.

##  Set up MySQL Workbench and import database

1.  Download and install: <https://dev.mysql.com/downloads/installer/>

2.  Follow the onscreen prompts until the installation is complete.

3.  Access the GitHub software repository and download the exported
    database which will be in the folder named Database.

4.  Open MySQL workbench. Navigate to Database \> Connect to Database
    from the menu at the top of the application.

5.  Replicate the below configuration. Select the button named "Store in
    vault" and enter the password for the root account then select OK.

![](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image6.png){width="6.268055555555556in"
height="4.559027777777778in"}

6.  After adding a connection, you will see the connection added under
    MySQL connections. Select this connection.

![](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image7.png){width="6.142199256342957in"
height="6.625574146981627in"}

7.  From the MySQL connection, select the Data Import/Restore option for
    the menu on the left.

![](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image8.png){width="4.525392607174103in"
height="6.233873578302712in"}

8.  Select the Import from dump project option and select the folder
    with the downloaded Database Export from GitHub.

![](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image9.png){width="6.268055555555556in"
height="3.334722222222222in"}

9.  In the Default Schema field, click on the New button then enter in
    st_python_webapp01_db01 for the Default Schema name. Click on the
    highlighted schema as shown in the image below. This will update the
    schema objects table.

![](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image10.png){width="6.268055555555556in"
height="3.314583333333333in"}

10. Next, click on the tab at the top named Import Progress and select
    the button to Start Import.

![](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image11.png){width="6.268055555555556in"
height="3.303472222222222in"}

11. You will then be able to access the database from MySQL workbench
    and view the data stored in the database.

![](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image12.png){width="6.268055555555556in"
height="3.2215277777777778in"}

## Install NodeJS 20.5.1

1.  Download and install NodeJS:
    <https://nodejs.org/en/download/current>

## Install Python 3.11.x

1.  Download and install Python: <https://www.python.org/downloads/>

## Clone the GitHub repository

1.  https://github.com/sashintulsiram/Python-Web-App-1.0.git

## Create a virtual environment

1.  From CMD, open the directory for the cloned GitHub repository and
    run the command: cd webapp

![](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image13.png){width="6.268055555555556in"
height="2.2631944444444443in"}

2.  Run the command: python -m venv venv

![](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image14.png){width="6.268055555555556in"
height="0.6263888888888889in"}

3.  Run the command: venv\\Scripts\\activate

![A black screen with white text Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image15.png){width="6.268055555555556in"
height="0.9097222222222222in"}

4.  Run the command: pip install -r requirements.txt

![A computer screen shot of a black screen Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image16.png){width="6.268055555555556in"
height="2.279166666666667in"}

5.  Run the command: deactivate

# Test Web Application 

## Start Web Application

1.  Start Python backend --

    a.  From CMD, open the directory for the cloned GitHub repository
        and run the command: cd webapp

    b.  Run the command to start virtual environment:
        venv\\Scripts\\activate

    c.  Run the command to start Python backend with REST API: python
        main.py

![](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image17.png){width="6.268055555555556in"
height="1.9375in"}

2.  Start React frontend --

    a.  Open a new CMD terminal window, open the directory for the
        cloned GitHub repository and run the command: cd react-app

    b.  Run the command to start React frontend: npm start

![A screenshot of a computer program Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image18.png){width="6.268055555555556in"
height="1.3305555555555555in"}

![A screen shot of a computer Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image19.png){width="5.150446194225721in"
height="2.7335706474190724in"}

## Using Filter Search 

1.  From the webpage, you will be able to use the filter search option
    to search for Trusted Brands in the following fields:

-   Company name: Enter in the name of the company.

-   Economic Sector: Primary / Secondary / Tertiary

-   Industries: Food and Beverage, Investment Management, Banking and
    Securities, Insurance, Footwear and Apparel, Technology,
    Telecommunication, Media

-   Sector: Technology, Telecommunications, Consumer, Retail, Energy and
    Resources, Financial Services.

![A screenshot of a computer Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image20.png){width="6.268055555555556in"
height="4.446527777777778in"}

## Using Sort Button

1.  From the webpage, you will be able to sort the Trusted Brands
    retrieved from the API in alphabetical order.

![](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image20.png){width="6.268055555555556in"
height="4.446527777777778in"}

![A screenshot of a website Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image21.png){width="6.268055555555556in"
height="3.9166666666666665in"}

## Illustration of Web Application

![A person looking at the camera Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image22.png){width="6.268055555555556in"
height="3.14375in"}

![A screenshot of a computer Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image23.png){width="6.268055555555556in"
height="3.0395833333333333in"}

![A screenshot of a website Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image24.png){width="6.268055555555556in"
height="3.345138888888889in"}

![A screenshot of a video Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image25.png){width="6.268055555555556in"
height="3.6756944444444444in"}

![A screenshot of a computer Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image26.png){width="6.268055555555556in"
height="3.792361111111111in"}

![A group of logos on a white background Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image27.png){width="6.268055555555556in"
height="3.597916666666667in"}

![A purple background with white text Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image28.png){width="6.268055555555556in"
height="2.5069444444444446in"}

![A screenshot of a computer Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image20.png){width="6.268055555555556in"
height="4.446527777777778in"}

![A screenshot of a website Description automatically
generated](vertopal_bf6bb768a9da4eabae3609e5117e9897/media/image21.png){width="6.268055555555556in"
height="3.9166666666666665in"}

# Contact Information

Please contact me on any of the below channels if you require assistance
in setting up your web application.

-   Email: sashintulsiram@gmail.com

-   Phone: 074 939 6705

-   WhatsApp: 074 939 6705
