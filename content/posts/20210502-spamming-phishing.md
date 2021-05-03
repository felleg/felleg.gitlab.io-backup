---
title: "Spamming a Phishing Campaign"
date: 2021-05-02T20:50:44-04:00
draft: true
cover:
tags:
  - hacking
description: "enter your description here"
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


[Video of the robot in action](https://drive.google.com/file/d/1WTbSl1-61k1KU4L_bCsMWgPUHXfgsry3/view)

