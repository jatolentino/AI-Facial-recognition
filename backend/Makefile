.PHONY: install
install:
	poetry install
	
.PHONY: install-pre-commit
install-pre-commit:
	poetry run pre-commit uninstall; poetry run pre-commit install

.PHONY: lint
lint:
	poetry run pre-commit run --all-files
	
.PHONY: collect-static
collectstatic:
	poetry run python manage.py collectstatic

.PHONY: makemigrations
migrations:
	poetry run python manage.py makemigrations

.PHONY: migrate
migrate:
	poetry run python manage.py migrate --run-syncdb

.PHONY: cp-rmn
cp-rmn:
	cp custom_rmn/__init__.py `poetry env info --path`"\\Lib\\site-packages\\rmn\\"
	
.PHONY: super
super:
	python manage.py superuser --username admin --password password --noinput --email 'admin@example.com'
	
	
.PHONY: run-server
run-server:
	poetry run python manage.py runserver
	

.PHONY: full
full: install migrations migrate cp-rmn super run-server ;


.PHONY: remove-packages
remove-packages: poetry run pip uninstall -r requirements.txt -y

.PHONY: remove-full
remove-full:
	poetry env remove `poetry env info --path | tr '\' '\n' | tail -1`