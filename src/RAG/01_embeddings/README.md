# Embeddings

This notebook let's you see the semantic difference between several sentences.

Prepare the environment:
```
conda create --name dwx2024-01-embeddings python=3.9.5 -y
conda install -n dwx2024-01-embeddings pip==23.3 -y --force

conda env config vars set --name dwx2024-01-embeddings HUGGINGFACEHUB_API_TOKEN={YOUR HUGGINGFACE API TOKEN}

conda activate dwx2024-01-embeddings

pip install -r requirements.txt
```
