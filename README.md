# Versear website

静的サイトを Nginx コンテナで配信します。Docker Compose が利用できる環境で、次のコマンドを実行してください。

```bash
docker compose up -d --build
```

起動後は <http://localhost:8080> で確認できます。公開ポートを変更する場合は、例えば次のように指定します。

```bash
PORT=3000 docker compose up -d --build
```

## 運用コマンド

```bash
# 状態とヘルスチェックを確認
docker compose ps

# ログを確認
docker compose logs -f web

# ソース更新後に再ビルドして入れ替え
docker compose up -d --build

# 停止・削除
docker compose down
```

本番で HTTPS を使用する場合は、このコンテナの前段に TLS を終端するリバースプロキシまたはロードバランサーを配置してください。コンテナ自身はポート `8080` で HTTP を配信します。
