Created for Portage dev-a-hack-a-thon-a-day 2024-05-31

Video demo: https://notarius.hubs.vidyard.com/watch/H4b7aE4qd6ER3Rk2GeWEd9?

Problems solved to make this app work:
- Choosing a data storing mechanism that could be accessed via code
- Deploying a Google Cloud Function (it didn't work with my
  felixleger.com Google workspace, I had to mess with IAM permissions, I
  am not even sure of what I did that worked. Adding allUsers as Cloud
  Function Invoker was important
- Solving CORS error with function, https://cloud.google.com/functions/docs/samples/functions-http-cors#functions_http_cors-python

Things attempted that I couldn't make work:
- Containerized app and database that could interact together
- Using Azure and Excel for the backend
- Instead of sending the questions-answers paired with the correct name
  choice, I wanted the backend only to send a question with its ID, so
  that the user wouldn't have all the answers stored in their browser. I
  didn't have time to fix that

Features I wish I could have added:
- Automatic translation
