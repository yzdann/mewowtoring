import os
import logging

from flask import Blueprint, jsonify

from .errors import bad_request, internal_error

LOGGER = logging.getLogger("gunicorn.error")
bp = Blueprint("api", __name__)


@bp.route("/ping/", methods=["GET"])
def ping_pong():
    LOGGER.info('Hitting the "/ping" route')
    return jsonify(
        {"status": "success", "message": "pong!", "container_id": os.uname()[1]}
    )


@bp.route("/bad/", methods=["GET"])
def bad():
    LOGGER.info('Hitting the "/bad" route')
    return bad_request("Whoops Your Bad!")


@bp.route("/internal/", methods=["GET"])
def internal():
    LOGGER.info('Hitting the "/internal" route')
    return internal_error("Catastrophic Failure!")
