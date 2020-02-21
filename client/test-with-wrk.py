from subprocess import run, PIPE
from urllib.parse import urljoin

main_url = "http://192.168.43.40/api/"
endpoints = (
    "bad/",
    "internal/",
    "ping/",
)

wrk = "wrk"
r = run(["which", wrk], stderr=PIPE)
if r.returncode != 0:
    raise SystemError(f"Please install {wrk}.")

for endpoint in endpoints:
    url_to_request = urljoin(main_url, endpoint)
    run([wrk, "-t12", "-c40", "-d30s", url_to_request])
