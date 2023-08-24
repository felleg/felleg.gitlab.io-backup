---
title: "Spamming a Phishing Campaign"
date: 2021-05-02T20:50:44-04:00
cover:
tags:
  - featured
---
{{< figure src="/img/spamming-phishing/email.png" position="center" caption="" >}}
{{< figure src="/img/spamming-phishing/facebook-post.png" position="center" caption="" >}}
{{< figure src="/img/spamming-phishing/post-fields.png" position="center" caption="" >}}

I liked learning about the `Faker` library in Python to generate my fake data:

```python
FAKE = {
        "name": randomize_capitalization(fake.name()),
        "address" : str(random.randint(1,9999)) + " " + fake.street_name(),
        "phone" : fake.phone_number(),
        "day_birth" : random.choice([str(i).zfill(2) for i in range(1,32)]),
        "month_birth" : random.choice([str(i).zfill(2) for i in range(1,13)]),
        "year_birth" : random.choice([str(i) for i in range(1910,2011)]),
        "credit_card" : fake.credit_card_number(),
        "security_code" : fake.credit_card_security_code(),
        "maiden_name" : randomize_capitalization(fake.last_name()),
        "expiry_month" : random.choice([str(i).zfill(2) for i in range(1,13)]),
        "expiry_year" : random.choice([str(i).zfill(2) for i in range(2021,2041)]),
    }
```

See the full code [here](https://gitlab.com/felleg/enjoy-my-fake-data)

I let it run for a night, and the link from the initial phishing email stopped working. I didn't know if I was
IP banned, or if the domain was changed, but it felt as though it was happening as a reaction to my spam.

Asking my friends, I started finding new domains I could spam with the same robot. I was happy to see that
most of my friends had received the previous, broken phishing link. This means they were relatively safe from
potential harm! woohoo!

[Video of the robot in action](https://drive.google.com/file/d/1WTbSl1-61k1KU4L_bCsMWgPUHXfgsry3/view)

I started working with my friend Mathieu and, after realizing that we could POST directly to the hacker URL
instead of using Selenium, we managed to make the robot 50 times faster. The amount of spam generated was
getting pretty serious!

This is still a work in progress, but this hopefully shows an example of ethical hacking: spamming a phishing
website for the good of the community. If you want to do this, remember to always use a VPN!

