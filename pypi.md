---
layout: page
---

## PyPI cache at sprints

Sprint networks are notoriously bad, even though sprints are usually less visited. This is less due to the fact that
sprints venues have bad WiFi, and more due to the fact that 100 developers calling "pip install django" at roughly the
same time is an unusual load on most networks in a typical sprints location.

We provide an on-site PyPI cache – it's a [devpi](https://devpi.net/docs/devpi/devpi/latest/+doc/index.html) instance on
the local network that caches PyPI packages. If at all possible, we'd like to ask you to use this mirror. There are
several ways to do that:

### Command line flag

```
pip install --index https://pypi.rose-conferences.org/root/pypi/+simple/ django
```

This will use our PyPI cache to install django. Great for one-off usage. (Works for searching, too, btw!)

### Environment variable

````
export PIP_INDEX_URL=http://pypi.rose-conferences.org/root/pypi/+simple/
```

Run this in your shell, then run other pip commands. This will activate the use of the PyPI cache for only this terminal
session, so it's great if you want to execute multiple pip commands in sequence or over the course of the day – but
you'll need to re-enter the command if you open a new terminal window.
