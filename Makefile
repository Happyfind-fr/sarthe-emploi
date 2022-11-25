# Nom de l'application
APP_NAME=Sarthe_emploi

# Chemin vers les sous-dossiers "back" et "front"
BACK_DIR=./back
FRONT_DIR=./front

# Cibles "start-back" et "start-front"
.PHONY: start start-back start-front

start:
	@concurrently --kill-others "make -C $(BACK_DIR) start" "make -C $(FRONT_DIR) start"

start-back:
	@$(MAKE) -C $(BACK_DIR) start

start-front:
	@$(MAKE) -C $(FRONT_DIR) start
