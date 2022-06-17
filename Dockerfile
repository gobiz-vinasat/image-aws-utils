FROM amazon/aws-cli
RUN curl -sL https://rpm.nodesource.com/setup_16.x | bash - \
    && yum install nodejs -y
COPY utils /utils