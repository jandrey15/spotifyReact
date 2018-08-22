npm install -g now
# sudo npm install -g --unsafe-perm now
echo "deploying..."
# now secrets add client_id $CLIENT_ID -t $now_token
# now secrets add client_secrect $CLIENT_SECRECT -t $now_token
URL=$(now -t $now_token)
echo "running acceptance on $URL"
curl --silent -L $URL
# now alias $URL spotify.johnserrano.xyz
now alias