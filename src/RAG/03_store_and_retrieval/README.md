# Store and Retrieval

This notebook shows storing and retrieval.

repare the environment:
```
conda create --name dwx2024-03-store-retrieval python=3.9.5 -y
conda install -n dwx2024-03-store-retrieval pip==23.3 -y --force

conda env config vars set --name dwx2024-03-store-retrieval HUGGINGFACEHUB_API_TOKEN={YOUR HUGGINGFACE API TOKEN}
conda env config vars set --name dwx2024-03-store-retrieval OPENAI_API_KEY={YOUR OPEN AI API KEY}

conda activate dwx2024-03-store-retrieval
pip install -r requirements.txt
```
