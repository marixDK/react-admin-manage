# 所有的Dockerfile都必须以FROM指令开始。
# 通过FROM指令，Docker编译程序能够知道通过哪个基础镜像执行来进行编译
FROM csbase.registry.cmbchina.cn/paas/cmb-nginx-1.14.2:v1.2.0

# 将dist文件中的内容复制到部署目录
COPY ./dist ${DEPLOYMENTS_DIR}
# 将部署目录下的nginx配置文件复制到nginx配置目录下，也可以用下面的移动指令
COPY nginx/nginx.conf ${NGINX_HOME}/conf/nginx.conf
#Run mv ${DEPLOYMENTS_DIR}/nginx/nginx.conf ${NGINX_HOME}/conf/nginx.conf


EXPOSE 8080

# Docker重启nginx
CMD ["/opt/nginx/sbin/nginx", "-p", "/opt/nginx", "-c", "/opt/nginx/conf/nginx.conf"]