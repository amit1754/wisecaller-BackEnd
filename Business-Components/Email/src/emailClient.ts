import sgMail from "@sendgrid/mail";
const key: any = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(key);

export default class  EmailSend {
  static async Send(to: string, subject: string, html: string) {
    try {
      const sendMailObj = {
        to,
        from: process.env.EMAIL_FROM,
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

  static async sendEmailWithAttachment(toEmail: string, subject: string, html: string, attachments: any[]) {
    try {
      const msg = {
        to: toEmail,
        from: process.env.EMAIL_FROM,
        subject,
        html,
        attachments: attachments
      };
      return await sgMail.send(msg);
    } catch (error) {
      return error;
    }
  }

  static async sendTemplatedEmail(toEmail, template, data) {
    try {      
        const msg = {
          to: toEmail,
          from: process.env.EMAIL_FROM,
          templateId: template,
          dynamic_template_data: data,
        };
        return await sgMail.send(msg);
      }catch (error) {
      return error;
    }
  }

  static async sendTemplatedEmailWithAttachment(toEmail: string, template: any, data: any, attachments: any[]) {
    try {
      data.year=new Date().getFullYear();
      const msg = {
        to: toEmail,
        from: process.env.EMAIL_FROM,
        templateId: template,
        dynamic_template_data: data,
        attachments: attachments
      };
      return await sgMail.send(msg);
    } catch (error) {
      return error;
    }
  }

}
