import smtplib
from email.message import EmailMessage

def email_alert(subject, body, to):
    msg= EmailMessage()
    msg.set_content(body)
    msg['subject']= subject
    msg['to']

    user = "dwike.adelya@gmail.com"
    password = ""

    server = smtplib.SMTP("smpt")