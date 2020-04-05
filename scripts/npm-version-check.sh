NPM_VERSION='5.6.0'

if [ $(npm -v) != $NPM_VERSION ] ; then
  echo "${RED}Please install correct version of npm by running${SET} ${YELLOW}'npm i npm@${NPM_VERSION} -g'${SET}"
  exit 1
fi