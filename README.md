# my first rails

* Ruby on Rails 公式の blog チュートリアル
  * https://railsguides.jp/getting_started.html

```
$ cd path/to/my-first-rails
$ docker build -t hidetakafm/my-first-rails .
$ docker create -t -v absolute/path/to/my-first-rails:/var/apps/my-first-rails -p 3002:3000 --name my-first-rails hidetakafm/my-first-rails
$ docker start my-first-rails
$ docker exec -it my-first-rails bash
```
