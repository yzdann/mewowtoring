DOCKER_IMAGE_NAME="grafana"
DOCKER_CONTAINER_NAME="vader_$DOCKER_IMAGE_NAME"
RESET_COLOR=`tput sgr0`
. "./.env"

docker images | grep $DOCKER_IMAGE_NAME/$DOCKER_IMAGE_NAME > /dev/null
status=$?
if test $status -ne 0
then
  echo "$(tput setaf 1)Not Found $DOCKER_IMAGE_NAME Image Locally.${RESET_COLOR}"
  exit
fi

echo "$(tput setaf 1)Stopping $DOCKER_CONTAINER_NAME ${RESET_COLOR}"
docker stop "$DOCKER_CONTAINER_NAME"
echo "$(tput setaf 2)Create New $DOCKER_CONTAINER_NAME ${RESET_COLOR}"
docker run --rm -d --name=$DOCKER_CONTAINER_NAME --network=host  -e "GF_SECURITY_ADMIN_PASSWORD=$GF_PASSWORD" "$DOCKER_IMAGE_NAME/$DOCKER_IMAGE_NAME"
