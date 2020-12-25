# Introduction 
This is the repository for Cypress Framework with Mocha Awesome Report 

# Getting Started
Follow below process for getting started with Cypress Code and run it on your own system:
1.	Installation process
    -   Clone this repository on your machine.
    -   Open command prompt and run "npm install"
2.	Software dependencies
    -   NodeJS
    -   Virtual Studio Code
    -   Git
3.	Latest releases
    -   Cypress Version: 4.11.0
4.	API references
    -   NA

# Build and Test
Follow below steps to run your tests:
    -   Once all the dependecies are installed, run below command to clear all the existing reports
        "npm run clean-reports"
    -   Above command will clean the existing reports. Now run below command to start test execution
        "npm run test"
    -   Once the execution is completed run below command:
        "npm run combine-reports"
    -   Once the reports are combined, run below command to generate HTML report:
        "npm run generate-report"
    -   Once the HTML report is generated after running about command, Navigate to project folder and check 
        "<Cypress-InstallationDirectory>/mochareports/report.html"

# Execution inside a Docker container
Now that we have tried to execute the project locally and tested everything, we can further extend cypress tests to run inside a Docker Container. Follow the below steps:

    -   Install Docker on windows/mac/linux
    -   Execute the below command in the command prompt or terminal:
        docker run -it -v $PWD:/e2e -w /e2e cypress/included:3.3.1

    Explanation of docker run command:

    -   -it = interactive terminal
    -   -v $PWD:/e2e = volume mounting current folder to /e2e inside the container
    -   -w /e2e = setting current working directory to /e2e
    -   cypress/included:3.3.2 = is the name of docker image with tag

# Bug
Following functionality is still not working an can be considered as bug
    -   Screenshots are gettinga attached in report for failure tests, but vidoes of the execution is not getting attached. 