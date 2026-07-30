# 3D肌肉素材命名清单

把 3D 解剖软件导出的素材放到本目录，页面会按文件名自动匹配每条肌肉。

每条肌肉需要 3 个文件：

- `*_origin_insertion.png`：3D解剖图，标出起点和止点。
- `*_train.gif`：对应训练动作动图。
- `*_stretch.gif`：对应拉伸动作动图。

## 文件列表

- 胸锁乳突肌：`01_sternocleidomastoid_origin_insertion.png`、`01_sternocleidomastoid_train.gif`、`01_sternocleidomastoid_stretch.gif`
- 斜方肌上束：`02_upper_trapezius_origin_insertion.png`、`02_upper_trapezius_train.gif`、`02_upper_trapezius_stretch.gif`
- 前锯肌：`03_serratus_anterior_origin_insertion.png`、`03_serratus_anterior_train.gif`、`03_serratus_anterior_stretch.gif`
- 胸小肌：`04_pectoralis_minor_origin_insertion.png`、`04_pectoralis_minor_train.gif`、`04_pectoralis_minor_stretch.gif`
- 深颈屈肌：`05_deep_neck_flexors_origin_insertion.png`、`05_deep_neck_flexors_train.gif`、`05_deep_neck_flexors_stretch.gif`
- 肩胛提肌：`06_levator_scapulae_origin_insertion.png`、`06_levator_scapulae_train.gif`、`06_levator_scapulae_stretch.gif`
- 菱形肌：`07_rhomboids_origin_insertion.png`、`07_rhomboids_train.gif`、`07_rhomboids_stretch.gif`
- 下斜方肌：`08_lower_trapezius_origin_insertion.png`、`08_lower_trapezius_train.gif`、`08_lower_trapezius_stretch.gif`
- 背阔肌：`09_latissimus_dorsi_origin_insertion.png`、`09_latissimus_dorsi_train.gif`、`09_latissimus_dorsi_stretch.gif`
- 冈下肌：`10_infraspinatus_origin_insertion.png`、`10_infraspinatus_train.gif`、`10_infraspinatus_stretch.gif`
- 臀中肌：`11_gluteus_medius_origin_insertion.png`、`11_gluteus_medius_train.gif`、`11_gluteus_medius_stretch.gif`
- 髂腰肌：`12_iliopsoas_origin_insertion.png`、`12_iliopsoas_train.gif`、`12_iliopsoas_stretch.gif`
- 腘绳肌：`13_hamstrings_origin_insertion.png`、`13_hamstrings_train.gif`、`13_hamstrings_stretch.gif`
- 股四头肌：`14_quadriceps_origin_insertion.png`、`14_quadriceps_train.gif`、`14_quadriceps_stretch.gif`
- 腓肠肌：`15_gastrocnemius_origin_insertion.png`、`15_gastrocnemius_train.gif`、`15_gastrocnemius_stretch.gif`

## 导出建议

- 解剖图建议使用透明背景或深色背景 PNG，比例 `16:9` 或 `4:3`。
- 动作建议导出为 GIF；如果后续要改成 MP4，也可以在 `index.html` 的 `muscle3dAssetMap` 中替换路径。
- 素材需来自你有授权使用的 3D 解剖软件或自制导出，避免直接使用未授权资源。
