# Nom de l'application
APP_NAME=Sarthe_emploi

# Chemin vers les sous-dossiers "back" et "front"
BACK_DIR=./back
FRONT_DIR=./front

# Cibles "start-back" et "start-front"
.PHONY: start start-back start-front
.DEFAULT_GOAL := install

install:
	@concurrently --kill-others "make -C $(BACK_DIR) install" "make -C $(FRONT_DIR) install"

install-back:
	@$(MAKE) -C $(BACK_DIR) install

install-front:
	@$(MAKE) -C $(FRONT_DIR) install

test:
	@concurrently --kill-others "make -C $(BACK_DIR) test" "make -C $(FRONT_DIR) test"	

test-back:
	@$(MAKE) -C $(BACK_DIR) test

test-front:
	@$(MAKE) -C $(FRONT_DIR) test

start:
	@concurrently --kill-others "make -C $(BACK_DIR) start" "make -C $(FRONT_DIR) start"

start-back:
	@$(MAKE) -C $(BACK_DIR) start

start-front:
	@$(MAKE) -C $(FRONT_DIR) start
