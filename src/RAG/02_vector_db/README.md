# Vector-DB

See how to store a document in a vector-db and how to retrieve it.

repare the environment:
```
conda create --name dwx2024-02-vector-db python=3.9.5 -y
conda install -n dwx2024-02-vector-db pip==23.3 -y --force

conda env config vars set --name dwx2024-02-vector-db HUGGINGFACEHUB_API_TOKEN={YOUR HUGGINGFACE API TOKEN}

conda activate dwx2024-02-vector-db

pip install -r requirements.txt
```
