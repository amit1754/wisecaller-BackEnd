import sgMail from "@sendgrid/mail";
const key: any = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(key);

class EmailSend {
  public async Send(to: string, from: string, subject: string, html: string) {
    try {
      const sendMailObj = {
        to,
        from,
        subject,
        html,
      };
      const sendMail = await sgMail.send(sendMailObj);
      return sendMail;
    } catch (error: any) {
      if (error.response) {
        return error.response.body;
      }
    }
  }
}

export const emailSend = new EmailSend();
