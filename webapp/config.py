from app import app
from flaskext.mysql import MySQL

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Fu11St@ckCh@113ng3'
app.config['MYSQL_DATABASE_DB'] = 'st_python_webapp01_db01'
app.config['MYSQL_DATABASE_HOST'] = '127.0.0.1'
mysql.init_app(app)