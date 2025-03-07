import { Question } from '../types';

export const questionBank: Record<string, Record<string, Question[]>> = {
  RestApi: {
    
      "java": [
                  {
                      "id": 1,
                      "question": "What is REST?",
                      "options": [
                          "Representational State Transfer",
                          "Remote State Transfer",
                          "Request State Transfer",
                          "Response State Transfer"
                      ],
                      "correctAnswer": "Representational State Transfer"
                  },
                  {
                      "id": 2,
                      "question": "Which HTTP method is used to retrieve data?",
                      "options": [
                          "GET",
                          "POST",
                          "PUT",
                          "DELETE"
                      ],
                      "correctAnswer": "GET"
                  },
                  {
                      "id": 3,
                      "question": "Which status code indicates a successful HTTP request?",
                      "options": [
                          "200",
                          "404",
                          "500",
                          "403"
                      ],
                      "correctAnswer": "200"
                  },
                  {
                      "id": 4,
                      "question": "Which protocol does REST use?",
                      "options": [
                          "HTTP",
                          "FTP",
                          "SSH",
                          "SMTP"
                      ],
                      "correctAnswer": "HTTP"
                  },
                  {
                      "id": 5,
                      "question": "Which of the following is NOT an HTTP method?",
                      "options": [
                          "GET",
                          "PUSH",
                          "POST",
                          "DELETE"
                      ],
                      "correctAnswer": "PUSH"
                  },
                  {
                      "id": 6,
                      "question": "What format is commonly used to exchange data in REST APIs?",
                      "options": [
                          "JSON",
                          "XML",
                          "CSV",
                          "YAML"
                      ],
                      "correctAnswer": "JSON"
                  },
                  {
                      "id": 7,
                      "question": "Which HTTP method is used to update an existing resource?",
                      "options": [
                          "PUT",
                          "GET",
                          "DELETE",
                          "OPTIONS"
                      ],
                      "correctAnswer": "PUT"
                  },
                  {
                      "id": 8,
                      "question": "Which HTTP method is idempotent?",
                      "options": [
                          "PUT",
                          "POST",
                          "PATCH",
                          "DELETE"
                      ],
                      "correctAnswer": "PUT"
                  },
                  {
                      "id": 9,
                      "question": "What does 404 HTTP status code mean?",
                      "options": [
                          "Not Found",
                          "Success",
                          "Internal Server Error",
                          "Unauthorized"
                      ],
                      "correctAnswer": "Not Found"
                  },
                  {
                      "id": 10,
                      "question": "Which of the following is a REST constraint?",
                      "options": [
                          "Statelessness",
                          "Statefulness",
                          "Tightly Coupled",
                          "Session-based"
                      ],
                      "correctAnswer": "Statelessness"
                  },
                  {
                      "id": 11,
                      "question": "What is the default port for HTTP?",
                      "options": [
                          "80",
                          "443",
                          "8080",
                          "21"
                      ],
                      "correctAnswer": "80"
                  },
                  {
                      "id": 12,
                      "question": "What is the default port for HTTPS?",
                      "options": [
                          "443",
                          "80",
                          "21",
                          "8080"
                      ],
                      "correctAnswer": "443"
                  },
                  {
                      "id": 13,
                      "question": "Which HTTP status code represents unauthorized access?",
                      "options": [
                          "401",
                          "403",
                          "404",
                          "500"
                      ],
                      "correctAnswer": "401"
                  },
                  {
                      "id": 14,
                      "question": "What is the purpose of the DELETE HTTP method?",
                      "options": [
                          "Remove a resource",
                          "Retrieve a resource",
                          "Update a resource",
                          "Create a resource"
                      ],
                      "correctAnswer": "Remove a resource"
                  },
                  {
                      "id": 15,
                      "question": "Which HTTP method is used to create a resource?",
                      "options": [
                          "POST",
                          "GET",
                          "PUT",
                          "DELETE"
                      ],
                      "correctAnswer": "POST"
                  },
                  {
                      "id": 16,
                      "question": "Which HTTP status code means 'Internal Server Error'?",
                      "options": [
                          "500",
                          "400",
                          "404",
                          "403"
                      ],
                      "correctAnswer": "500"
                  },
                  {
                      "id": 17,
                      "question": "Which HTTP header is used for authentication?",
                      "options": [
                          "Authorization",
                          "Content-Type",
                          "Accept",
                          "Cache-Control"
                      ],
                      "correctAnswer": "Authorization"
                  },
                  {
                      "id": 18,
                      "question": "What does the OPTIONS HTTP method do?",
                      "options": [
                          "Returns supported HTTP methods",
                          "Retrieves a resource",
                          "Deletes a resource",
                          "Creates a resource"
                      ],
                      "correctAnswer": "Returns supported HTTP methods"
                  },
                  {
                      "id": 19,
                      "question": "Which of the following best describes RESTful APIs?",
                      "options": [
                          "They follow REST principles",
                          "They use only JSON",
                          "They require SOAP",
                          "They depend on WebSockets"
                      ],
                      "correctAnswer": "They follow REST principles"
                  },
                  {
                      "id": 20,
                      "question": "Which HTTP status code means 'Created'?",
                      "options": [
                          "201",
                          "200",
                          "204",
                          "400"
                      ],
                      "correctAnswer": "201"
                  }
      ],
      "dotnet": [
                      {
                          "id": 1,
                          "question": "What is REST?",
                          "options": [
                              "Representational State Transfer",
                              "Remote State Transfer",
                              "Request State Transfer",
                              "Response State Transfer"
                          ],
                          "correctAnswer": "Representational State Transfer"
                      },
                      {
                          "id": 2,
                          "question": "Which HTTP method is used to retrieve data?",
                          "options": [
                              "GET",
                              "POST",
                              "PUT",
                              "DELETE"
                          ],
                          "correctAnswer": "GET"
                      },
                      {
                          "id": 3,
                          "question": "Which status code indicates a successful HTTP request?",
                          "options": [
                              "200",
                              "404",
                              "500",
                              "403"
                          ],
                          "correctAnswer": "200"
                      },
                      {
                          "id": 4,
                          "question": "Which protocol does REST use?",
                          "options": [
                              "HTTP",
                              "FTP",
                              "SSH",
                              "SMTP"
                          ],
                          "correctAnswer": "HTTP"
                      },
                      {
                          "id": 5,
                          "question": "Which of the following is NOT an HTTP method?",
                          "options": [
                              "GET",
                              "PUSH",
                              "POST",
                              "DELETE"
                          ],
                          "correctAnswer": "PUSH"
                      },
                      {
                          "id": 6,
                          "question": "What format is commonly used to exchange data in REST APIs?",
                          "options": [
                              "JSON",
                              "XML",
                              "CSV",
                              "YAML"
                          ],
                          "correctAnswer": "JSON"
                      },
                      {
                          "id": 7,
                          "question": "Which HTTP method is used to update an existing resource?",
                          "options": [
                              "PUT",
                              "GET",
                              "DELETE",
                              "OPTIONS"
                          ],
                          "correctAnswer": "PUT"
                      },
                      {
                          "id": 8,
                          "question": "Which HTTP method is idempotent?",
                          "options": [
                              "PUT",
                              "POST",
                              "PATCH",
                              "DELETE"
                          ],
                          "correctAnswer": "PUT"
                      },
                      {
                          "id": 9,
                          "question": "What does 404 HTTP status code mean?",
                          "options": [
                              "Not Found",
                              "Success",
                              "Internal Server Error",
                              "Unauthorized"
                          ],
                          "correctAnswer": "Not Found"
                      },
                      {
                          "id": 10,
                          "question": "Which of the following is a REST constraint?",
                          "options": [
                              "Statelessness",
                              "Statefulness",
                              "Tightly Coupled",
                              "Session-based"
                          ],
                          "correctAnswer": "Statelessness"
                      },
                      {
                          "id": 11,
                          "question": "What is .NET?",
                          "options": [
                              ".NET is a framework developed by Microsoft",
                              "A programming language",
                              "An operating system",
                              "A database management system"
                          ],
                          "correctAnswer": ".NET is a framework developed by Microsoft"
                      },
                      {
                          "id": 12,
                          "question": "Which language is NOT supported by .NET?",
                          "options": [
                              "C#",
                              "JavaScript",
                              "Python",
                              "Ruby"
                          ],
                          "correctAnswer": "Ruby"
                      },
                      {
                          "id": 13,
                          "question": "What is CLR in .NET?",
                          "options": [
                              "Common Language Runtime",
                              "Code Link Register",
                              "Central Language Repository",
                              "Common Logic Register"
                          ],
                          "correctAnswer": "Common Language Runtime"
                      },
                      {
                          "id": 14,
                          "question": "What is the purpose of the .NET Core framework?",
                          "options": [
                              "Cross-platform development",
                              "Only for Windows applications",
                              "Only for mobile development",
                              "Only for web applications"
                          ],
                          "correctAnswer": "Cross-platform development"
                      },
                      {
                          "id": 15,
                          "question": "Which .NET component is responsible for memory management?",
                          "options": [
                              "Garbage Collector",
                              "JIT Compiler",
                              "ASP.NET Core",
                              "Common Type System"
                          ],
                          "correctAnswer": "Garbage Collector"
                      },
                      {
                          "id": 16,
                          "question": "Which of the following is a .NET UI framework?",
                          "options": [
                              "WPF",
                              "React",
                              "Vue.js",
                              "Bootstrap"
                          ],
                          "correctAnswer": "WPF"
                      },
                      {
                          "id": 17,
                          "question": "What does ASP.NET stand for?",
                          "options": [
                              "Active Server Pages .NET",
                              "Application Server Pages .NET",
                              "Advanced Software Platform .NET",
                              "Automated Server Pages .NET"
                          ],
                          "correctAnswer": "Active Server Pages .NET"
                      },
                      {
                          "id": 18,
                          "question": "What is the latest version of .NET called?",
                          "options": [
                              ".NET 8",
                              ".NET Framework 4.8",
                              "ASP.NET Core 6",
                              ".NET Standard 2.0"
                          ],
                          "correctAnswer": ".NET 8"
                      },
                      {
                          "id": 19,
                          "question": "Which attribute is used to define a RESTful API method in ASP.NET Core?",
                          "options": [
                              "[HttpGet]",
                              "[HttpPost]",
                              "[HttpPut]",
                              "All of the above"
                          ],
                          "correctAnswer": "All of the above"
                      },
                      {
                          "id": 20,
                          "question": "Which middleware in ASP.NET Core is used for routing RESTful API endpoints?",
                          "options": [
                              "UseRouting()",
                              "UseEndpoints()",
                              "UseMvc()",
                              "All of the above"
                          ],
                          "correctAnswer": "All of the above"
                      }
      ]
  
  
}};