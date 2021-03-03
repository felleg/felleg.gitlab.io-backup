---
title: "Automating in Real Life"
date: 2021-03-03T12:02:39-05:00
draft: true
toc: false
cover: "img/pi-in-desk.jpg"
tags:
  - pi
  - automation
---

The picture in the banner of this post is a Raspberry Pi 3B in its Short Crust case (on the left), next to an
HDMI switcher (on the right). All of this is housed behind the main drawer of my Micke desk from IKEA.

{{< figure src="/img/micke-desk.png" position="center" caption="According to IKEA, the Micke desk is  made for kids!" >}}

It wasn't always like that. Just two weeks ago, this same Raspberry Pi was gathering dust on a tableta. What
happened?

# Money talks

I was discussing with my partner about financial investments. She told me that every month, she would track
her investments to know what kind of returns she was generating. Seeing the graphs she produced in an
Excel-like sheet, I was impressed. This was really useful information that, for some reason, our financial
institutions only generated in yearly reports. In theory, all I'd need to do to get the same data about my
investments would be to take notes at fixed intervals during the year.

However, I'm too lazy for that.

I started thinking back to the [Romhacking web scraping
project](https://felixleger.com/posts/2021/01/web-scraping-for-preservation/) I made a couple months back.
Surely, I could create a similar scraping tool that would get infromation from my financial institution's
website. As with most corporate website, it is written in HTML from a template. Here's a look at the data I
wanted to extract:

{{< figure src="/img/investment-table.png" position="center" caption="Four accounts under a main roof" >}}

Indeed, I hear you ask, how complex could it be? Turns out, it was really simple to do:

```python
def get_data_from_institution(username, password):
    website = "redacted (sorry folks)"
    portfolio_website = "redacted (sorry again folks)"
    br = mechanize.Browser()
    br.set_handle_robots(False)
    # Pro-tip: if your security can be defeated by faking a user-agent, you don't have security.
    br.addheaders = [('User-agent',
      'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.1) Gecko/2008071615 Fedora/3.0.1-1.fc9 Firefox/3.0.1')]

    br.open(website)
    br.select_form(id='login')
    br['txtUserID'] = username
    br['txtMotPasse'] = password
    br.submit()

    # We have successfully logged in, so let's open the portfolio
    br.open(portfolio_website)
    soup = bs(br.response().read(), 'html.parser')

    data = {'date': datetime.datetime.now().strftime("%Y%m%d")}

    # Get the amount of money in each account
    for i, acc in enumerate(soup.find_all('img', attrs={'src':'images/arrow.gif'})):
        plan_id = acc.findNext('td')
        description = plan_id.findNext('td')
        plan_holder = description.findNext('td')
        usd = plan_holder.findNext('td')
        cad = usd.findNext('td')

        account_name = description.get_text() + ' ' + plan_id.get_text()
        data[account_name] = [cad.get_text().replace(',', '')]

    return pd.DataFrame(data)
```

I had a working script. What was remaining to do was to automate the process and make it accessible through
the web. Bonus brownie points if I managed to automate a visualization of my investments (spoiler: I did!)

(fill this section)

{{< figure src="/img/data-studio-invest.png" position="center" caption="Automatic visualization from Google Data Studio, updated every day!" >}}

Now I read some books that suggest "couch potato" strategies for investing that require you not to panick
when markets go down, and all that. Indeed, I'm just doing this for fun. I won't use this graph to make
financial decisions. I'm just glad that I get more data points than my partner without having to bother remembering to
actually track my investments (just kidding, babe!).

# Why stop there?

I now had a machine always connected that could perform automatic tasks as often as I wished. What else could
I automate?

(Discuss romhacking scraping added here)

# text ideas

This is really neat, in the past I only considered Raspberry Pis as machines to play video games at home and
perform simple tasks in labs. But why not combine them? Now, my Pi is laways connected to my screen. I can
play RetroPie any time I want, while knowing at the same time that my Pi is being useful by automatically
doing background tasks that help me in my personal life.

I love when knowledge from my profession trickles down into my personal life and empowers me.
