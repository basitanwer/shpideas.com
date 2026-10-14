/**
 * The policies. One page each, at the `path` given here.
 *
 * The company has one, for this site and for email. Each product has its own
 * under its name (`/tock/…`) and stands alone: nothing a Tock customer agreed
 * to changes because another product was added or changed. A new product gets
 * new entries here and new pages under `src/pages/<product>/`; it is never
 * written into another product's policy.
 *
 * usetock.com's footer, Stripe's checkout and Tock's About page (through
 * buy.usetock.com) all link to Tock's three addresses, so the paths must not
 * change.
 *
 * Written 2026-10-12 from the tock repository's launch documents
 * (SITE-AND-MEASUREMENT section 3, PRICING "Terms", PAYMENTS-PLAN, LAUNCH-
 * CHECKLIST section 7), with the decisions Basit made on 2026-10-13: a
 * 30-day refund window, no sync in 1.0, update checks against usetock.com,
 * crash reports to crash@usetock.com, Delaware law. Revised that day after an outside
 * read of the pages. Not reviewed by a lawyer. What is still to settle is
 * marked OPEN beside its sentence.
 *
 * A string in a `body` array is a paragraph. An array of strings is a list.
 */

import { site } from './site';

export interface PolicySection {
  readonly heading: string;
  readonly body: readonly (string | readonly string[])[];
}

export interface Policy {
  /** Where the page is served, and what the footers link to. */
  readonly path: string;
  /** The page's heading and its footer label. */
  readonly title: string;
  /** <meta name="description">. */
  readonly description: string;
  /** The day the text last changed, as shown on the page. Set it on the day of publication. */
  readonly updated: string;
  /** Rendered above the first section. */
  readonly intro: readonly string[];
  readonly sections: readonly PolicySection[];
  /** The address the page's last line gives for questions. */
  readonly contact: string;
}

const companyEmail = 'hello@shpideas.com';
const tockSupportEmail = 'support@usetock.com';
const crashReportEmail = 'crash@usetock.com';

/** PAYMENTS-PLAN decision 6, decided 2026-10-13. */
const refundWindowDays = 30;

const updated = '14 October 2026';

export const privacy: Policy = {
  path: '/privacy',
  title: 'Privacy policy',
  description: `What ${site.name} collects on shpideas.com and when you write to it, and how to have it removed.`,
  updated,
  intro: [
    `This is the policy of ${site.legalName}, which works under the name ${site.name}, for this website, shpideas.com, and for email you send the company. Each product has a policy of its own, linked at the foot of this page, which says what that product collects.`,
  ],
  sections: [
    {
      heading: 'This website',
      body: [
        'shpideas.com sets no cookies, loads no scripts from other companies and runs no analytics.',
        'It is served by Cloudflare, which handles each request, your IP address included, to deliver the page and to keep the site safe from abuse. Cloudflare keeps its own logs of those requests. We keep none of our own.',
      ],
    },
    {
      heading: 'When you write to us',
      body: [
        // OPEN: the period is a proposal, yours to set, and nothing deletes old mail by itself: it is done by hand.
        // The mail host is read from the domain's MX and SPF records and Gomailify's own pages, 2026-10-13. Confirm the Gmail mailbox.
        'If you email us, we keep your message and your address so that we can answer and can find the conversation again, for up to two years after the conversation ends.',
        'Mail to us arrives through Gomailify, a service of Mercata Sagl in Switzerland, which passes each message on and deletes its copy within 7 days. The mailbox itself is at Google’s Gmail.',
        'We do not sell personal data, and we give it to nobody else unless the law requires it.',
      ],
    },
    {
      heading: 'Your choices',
      body: [
        `Write to ${companyEmail} to see, correct or delete what we hold about you, to get a copy of it, or to ask us to stop or limit a use of it. You can also complain to the data protection authority of your country.`,
        // OPEN: for the lawyer, as in Tock's policy. Add the company's postal address.
        `${site.legalName}, in the United States, decides how this data is used, and the companies named here handle it there and in other countries. Cloudflare says it is certified under the EU-US Data Privacy Framework, with its UK and Swiss extensions, and keeps the European standard contractual clauses in its terms beside it. For readers in the European Union and the United Kingdom, the ground for it is our legitimate interest in answering people who write to us and in keeping the site safe from abuse.`,
      ],
    },
    {
      heading: 'Changes',
      body: ['When this policy changes, the date at the top changes with it.'],
    },
  ],
  contact: companyEmail,
};

export const tockPrivacy: Policy = {
  path: '/tock/privacy',
  title: 'Tock privacy policy',
  description: `What Tock and usetock.com collect, who else handles it, and how to have it removed.`,
  updated,
  intro: [
    `This policy covers Tock, the time tracker for the Mac made by ${site.legalName}, which works under the name ${site.name}, and Tock’s website, usetock.com. It says what each collects, who else handles it and how to have it removed. It covers no other product of the company.`,
    'The short version: Tock keeps your time on your Mac. It has no account, we run no server that holds what you record, and it sends us nothing about how you use it: only one message when you activate a key on a Mac.',
  ],
  sections: [
    {
      heading: 'Tock, the app',
      body: [
        'Everything you record in Tock, your clients, projects, to-dos, time, rates and notes, is kept in a database on your Mac. It is not sent to us and we cannot read it.',
        'Tock has no analytics. It does not report what you do in it or how often you open it.',
        'To notice that you have stepped away, Tock asks macOS how long ago the keyboard or mouse was last used. It does not read what you type or what is on your screen.',
        // Sync is hidden in 1.0. When it ships, say here that a copy goes to the user's private iCloud database, and name Apple below.
        // The update check is in 1.0 and not built yet (LAUNCH-BLOCKERS section 2). Check this paragraph against the build.
        'Tock checks for new versions by fetching a file from usetock.com. Like any request to a website, the check reaches our host with your IP address and the version of Tock you run. It carries nothing else about you and nothing you have recorded. You can turn the check off in Settings.',
        // OPEN: the crash report is not built. Once it is, list here what a report holds (LAUNCH-CHECKLIST section 4).
        `If Tock crashes, it offers to send us a report, at ${crashReportEmail}. The whole report is shown to you first, and nothing is sent unless you press Send. We use a report to find and fix the fault, and for nothing else.`,
        'Tock checks your licence key on your Mac, and never asks a server whether it works. When you activate a key on a Mac, Tock sends one message to buy.usetock.com: the key, with your name, your email address and the order number in it, and a one-way code for that Mac, which is different for every licence and from which nothing about the Mac can be read. Like any request to a website, it reaches our host with your IP address. If the message cannot be delivered, Tock sends it again later, until our service has taken it. Activating never depends on the answer, and Tock works the same without one. It sends nothing else about your licence. We keep usetock.com for as long as a version of Tock that sends this may run.',
        'The Buy button opens a web address that carries the day of your trial and your version of Tock. The “Not for me” button’s address carries the number of days you used Tock, the day of your trial and the version. Nothing is sent unless you press the button, and nothing else is on the link.',
      ],
    },
    {
      heading: 'Buying a licence',
      body: [
        // Every sentence that calls Link the seller holds only under Stripe Managed Payments, which is by
        // Stripe's review (PAYMENTS-PLAN section 2). With another provider, here and in the terms and refunds, it changes.
        'Tock is sold by Link, a part of Stripe, which is the seller whichever way you pay, Apple Pay included. You do not need a Link account. Link takes the payment and holds your payment details under its own privacy policy. We never see your card number.',
        'With each sale we receive your name, your email address and your country.',
        'Your licence key holds your name, your email address and the order number, so that the key says whose it is. Anyone you give the key to can read them.',
        'The email that brings your key is delivered by Resend. The service that makes the key, at buy.usetock.com, runs on Cloudflare. That service keeps one record: for each licence, the codes of the Macs it was activated on, each with the day it was first seen, so that we know how many Macs a licence is used on. It does not keep the name or the email address the key holds, and the record is never used to end a licence. For anything else about a purchase it reads Stripe.',
        'The page that activates a key reads it in your browser and does not send it. Tock sends it when it is activated, as “Tock, the app” says.',
        // Stripe's page says the buyer's data is removed from the purchase; whether the purchase can still be found was not seen (PAYMENTS-PLAN section 2).
        'If you ask Link to delete your data, your key goes on working. We may then no longer be able to look the purchase up, for example to send you the key again.',
        'When a purchase is refunded in full, or a dispute raised with your bank is decided against us, its order number goes on a list inside later versions of Tock, so that the key stops working. The list holds order numbers and nothing else.',
      ],
    },
    {
      heading: 'The website and the waitlist',
      body: [
        // True today. Cookieless analytics and a count of downloads are planned for usetock.com
        // (SITE-AND-MEASUREMENT sections 4 and 5); this sentence changes on the day either is added.
        'usetock.com sets no cookies, loads no scripts from other companies and runs no analytics.',
        'It is served by Cloudflare, which handles each request, your IP address included, to deliver the page and to keep the site safe from abuse.',
        'When you join the waitlist on usetock.com, we send one email with a link to confirm your address. Until you confirm, we keep no list with your address on it: the link itself carries the address, readable by anyone who has the link, and stops working after 7 days. Resend, which delivers that email, keeps its own record of having sent it. When you press the button on the page the link opens, your address is added to our list at Resend, along with whether you offered to beta test.',
        'We use that list to write to you about Tock: when it is released, about the beta if you offered to test, and now and then with news of it. We use it for nothing else and give it to nobody, and you can leave it at any time by writing to us.',
      ],
    },
    {
      heading: 'When you write to us',
      body: [
        'If you email us, we keep your message and your address so that we can answer and can find the conversation again.',
      ],
    },
    {
      heading: 'How long we keep it',
      body: [
        // OPEN: these periods are proposals, yours to set. Nothing deletes on a date by itself: each is done by hand.
        [
          'The waitlist: until you ask to leave it.',
          'Emails and crash reports: up to two years after the conversation ends or the fault is fixed.',
          'The record of a sale: as long as tax and accounting law requires.',
          'The order number of a refunded purchase, in Tock’s list: for as long as Tock is updated, since every later version has to refuse that key.',
          'The Macs a licence was activated on: for as long as we sell Tock, or until you ask us to delete yours. We then keep the order number alone, so that we never count that licence again.',
          'Requests to the website: as long as Cloudflare keeps its own logs. We keep none of our own.',
        ],
      ],
    },
    {
      heading: 'Who else handles your data',
      body: [
        [
          'Link and Stripe, for payments, and Apple if you pay with Apple Pay.',
          'Resend, for the emails we send.',
          'Cloudflare, for the website and the licence service at buy.usetock.com.',
          // Read from the domain's MX and SPF records and Gomailify's own pages, 2026-10-13. Confirm the Gmail mailbox.
          'Gomailify, a service of Mercata Sagl in Switzerland, and Google’s Gmail, for the messages and crash reports you send us. Gomailify passes each message on and deletes its copy within 7 days. The mailbox is at Gmail.',
        ],
        'We do not sell personal data, and we give it to nobody else unless the law requires it.',
        // From each company's own pages, read 2026-10-13. OPEN, for the lawyer: Google and Gomailify were not checked, nor which terms the company has in fact accepted.
        `${site.legalName} is in the United States. These companies store and handle data there and in other countries. Cloudflare, Stripe and Resend each say they are certified under the EU-US Data Privacy Framework, with its UK and Swiss extensions, and keep the European standard contractual clauses in their terms beside it.`,
      ],
    },
    {
      heading: 'Your choices',
      body: [
        'What you record in Tock is already yours: you can export it, edit it and delete it in the app.',
        `Write to ${tockSupportEmail} to see, correct or delete what we hold about you: your place on the waitlist, your emails to us, the Macs your licence was activated on, and the record of your purchase where the law lets us delete it.`,
        'Wherever you live, you can ask us for a copy of your data in a form you can take elsewhere, ask us to stop or limit a use of it, and take back a consent you gave, such as your place on the waitlist. You can also complain to the data protection authority of your country.',
      ],
    },
    {
      heading: 'Who is responsible, and on what grounds',
      body: [
        // OPEN: for the lawyer, with whether EU and UK law applies and whether a representative there is needed. Add the company's postal address.
        `${site.legalName} decides how the data described here is used, and is the one to write to about it. Link is responsible for the payment details it holds.`,
        'For readers in the European Union and the United Kingdom, these are the grounds the law asks us to name:',
        [
          'Your consent: the waitlist, and a crash report you choose to send.',
          'A contract with you: making your licence key and sending it, and refunds.',
          'A legal duty: keeping the record of a sale.',
          'Our legitimate interest in answering people who write to us and in keeping the site and the licence service safe from abuse, and in refusing the key of a purchase that was refunded.',
          'Our legitimate interest in knowing how many Macs a licence is used on, to decide what to build: the Macs a licence was activated on.',
        ],
      ],
    },
    {
      heading: 'Changes',
      body: [
        'When this policy changes, the date at the top changes with it. A change to what Tock itself sends is also said in the notes of the release that makes it.',
      ],
    },
  ],
  contact: tockSupportEmail,
};

export const tockTerms: Policy = {
  path: '/tock/terms',
  title: 'Tock terms',
  description: `The terms under which ${site.name} licenses Tock, its time tracker for the Mac.`,
  updated,
  intro: [
    `These are the terms under which ${site.legalName}, which works under the name ${site.name}, lets you use Tock, its time tracker for the Mac. By installing or using Tock you agree to them.`,
  ],
  sections: [
    {
      heading: 'The trial',
      body: [
        'Tock runs for 14 days with everything unlocked. The trial needs no account and no payment details.',
        'When the trial ends without a licence, Tock records no new time. Everything already recorded stays yours to read, edit and export.',
      ],
    },
    {
      heading: 'The licence',
      body: [
        'A licence is for one person. It lets you use Tock on every Mac you use yourself, whether it is your own or one given to you for your work.',
        'A lifetime licence covers every update to Tock for Mac, for as long as we make Tock. “Lifetime” is the product’s lifetime, not yours. Apps for other devices, such as an iPhone app, are separate purchases. If we ever stop making Tock, your licence does not end: the key is checked on your Mac and needs no server of ours. We cannot promise that an old version will run on a macOS released after it.',
        'Tock is licensed to you, not sold. You may not resell it, pass it on, or remove or get around the licence check, and you may not take it apart except where the law says you may. All rights not given here stay with us.',
      ],
    },
    {
      heading: 'Your key',
      body: [
        'Your licence key holds your name, your email address and the order number. It works offline, and Tock never asks a server whether it works. When you activate it on a Mac, Tock tells us so, in one message, so that we know how many Macs a licence is used on. Nothing depends on that.',
        'Keep it to yourself. A key that is shared or published may stop working in a later update.',
        'A refund in full ends the licence on that day. So does a dispute you raise with your bank, once the bank decides it in your favour. While a dispute is open, and if it is decided any other way, the licence stands and the key is left alone. Tock checks keys offline, so a key whose licence has ended stops working with a later update. What you recorded stays readable, editable and exportable.',
        `If your key stops working and you think that is a mistake, write to ${tockSupportEmail} and we will put it right.`,
      ],
    },
    {
      heading: 'Buying',
      body: [
        'Tock is sold by Link, a part of Stripe, which is the seller whichever way you pay, Apple Pay included. The charge on your statement reads LINK.COM* and our name, and Link’s own terms apply to the payment. The price is shown before you pay, with tax added where it applies.',
        'Refunds are covered by the refund policy at shpideas.com/tock/refunds.',
      ],
    },
    {
      heading: 'Your data',
      body: [
        'What you record in Tock is yours and stays on your Mac. We have no copy and cannot restore it, so keep backups.',
        'Tock adds up time and money from what you enter. Check its figures before you bill anybody from them.',
      ],
    },
    {
      heading: 'No warranty',
      body: [
        // OPEN: have a lawyer read this section and the next, and agreeing "by installing or using". The wording is the usual one, not advice.
        'Tock is provided as it is. As far as the law allows, we give no warranty that it will be free of errors or fit for a particular purpose.',
        'As far as the law allows, we are not liable for lost profits, lost data or indirect loss, and our total liability to you is limited to what you paid for your licence. Nothing here takes away rights that the law of your country gives you as a consumer and that cannot be signed away.',
      ],
    },
    {
      heading: 'Law and changes',
      body: [
        'These terms are governed by the law of the State of Delaware, USA, without taking away the protection of the law of the country you live in.',
        'You may not use Tock, or pass it on, where the law of the United States forbids us to supply it.',
        'We may change these terms for later versions of Tock. The date at the top changes when they do. A licence you have already bought keeps what it was sold with.',
      ],
    },
  ],
  contact: tockSupportEmail,
};

export const tockRefunds: Policy = {
  path: '/tock/refunds',
  title: 'Tock refund policy',
  description: `How to get your money back for Tock: within ${refundWindowDays} days, no questions asked.`,
  updated,
  intro: [
    `If Tock is not for you, write to us within ${refundWindowDays} days of buying it and you get your money back. You do not have to say why.`,
  ],
  sections: [
    {
      heading: 'How to ask',
      body: [
        `Email ${tockSupportEmail} from the address you bought with, or give the order number from your receipt or your licence email.`,
        'The money goes back the way it came. Link, a part of Stripe, is the seller and makes the refund, so your statement shows it as LINK.COM*. Your bank decides how soon it appears.',
      ],
    },
    {
      heading: 'What happens to the key',
      body: [
        'A refund in full ends the licence on the day it is made. Tock checks keys offline, so the key itself stops working with a later update, not at once. What you recorded stays on your Mac, and you can still read, edit and export it.',
      ],
    },
    {
      heading: `After ${refundWindowDays} days`,
      body: [
        'Tock has a 14-day trial with everything unlocked so that you can decide before you pay. After the window a refund is ours to offer, not a promise, so write to us and we will look at it.',
        'None of this limits what the law of your country gives you, such as a right to withdraw from a purchase or a remedy when software is faulty. Those rights stand beside this policy, whatever its dates.',
      ],
    },
  ],
  contact: tockSupportEmail,
};

/** In footer order. */
export const policies: readonly Policy[] = [privacy, tockPrivacy, tockTerms, tockRefunds];
