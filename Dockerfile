FROM ruby:2.3

RUN apt-get update
RUN apt-get install net-tools sqlite3

# gem のドキュメントなどは入れない
RUN echo -e 'install: --no-document\nupdate: --no-document' >> ~/.gemrc

# bundler を入れる
RUN gem install bundler
RUN gem install rails -v '~>5.0.0'

WORKDIR /var/apps/my-first-rails
CMD sh ./docker_entry.sh
