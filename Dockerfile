FROM bitnami/minideb:latest
LABEL MAINTAINER="Amir Pourmand"

ENV DEBIAN_FRONTEND=noninteractive \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US:en \
    LC_ALL=en_US.UTF-8

RUN printf 'Acquire::Retries "5";\nAcquire::http::Timeout "30";\nAcquire::https::Timeout "30";\n' > /etc/apt/apt.conf.d/80-retries \
    && apt-get update -y \
    && apt-get install --fix-missing --no-install-recommends -y \
        locales \
        ruby-full \
        build-essential \
        zlib1g-dev \
        imagemagick \
    && sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen \
    && locale-gen \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# ENV GEM_HOME='root/gems' \
#     PATH="root/gems/bin:${PATH}"
RUN gem install jekyll bundler
RUN mkdir /srv/jekyll
ADD Gemfile /srv/jekyll
WORKDIR /srv/jekyll
RUN bundle install
