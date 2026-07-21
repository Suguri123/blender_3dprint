export const installStepsData = [
  {
    step: 1,
    title: "1. 공식 홈페이지 접속 및 설치 파일 다운로드",
    desc: "블렌더 공식 웹사이트(<a href='https://www.blender.org/download/' target='_blank' rel='noopener noreferrer' class='external-link'>blender.org/download ↗</a>)에 접속하여 'Download Blender' (Windows Installer LTS 최신 버전) 버튼을 클릭하여 설치 프로그램(.msi)을 다운로드합니다.",
    img: "./images/install/01.png"
  },
  {
    step: 2,
    title: "2. 설치 마법사(Setup Wizard) 시작",
    desc: "다운로드한 설치 파일을 실행하면 Blender 마법사 안내 창이 나타납니다. 'Next' 버튼을 클릭합니다.",
    img: "./images/install/02.png"
  },
  {
    step: 3,
    title: "3. 설치 폴더 경로 확인 및 지정",
    desc: "블렌더가 설치될 컴퓨터 경로(기본: C:\\Program Files\\Blender Foundation\\Blender\\)를 확인하고 'Next'를 누릅니다.",
    img: "./images/install/03.png"
  },
  {
    step: 4,
    title: "4. 설치 실행 준비 완료",
    desc: "'Ready to install Blender' 화면에서 'Install' 버튼을 눌러 실제 파일 설치를 시작합니다.",
    img: "./images/install/04.png"
  },
  {
    step: 5,
    title: "5. 시스템 구성 요소 등록 진행",
    desc: "3D 그래픽 엔진 및 관련 라이브러리 구성 요소가 등록되는 동안 잠시 기다립니다.",
    img: "./images/install/05.png"
  },
  {
    step: 6,
    title: "6. 파일 복사 및 설치 마무리",
    desc: "새로운 3D 렌더링 엔진 파일들이 지정된 디렉터리로 복사되며 인스톨이 완료됩니다.",
    img: "./images/install/06.png"
  },
  {
    step: 7,
    title: "7. 블렌더 설치 완료 확인",
    desc: "'Completed the Blender Setup Wizard' 문구가 뜨면 'Finish' 버튼을 눌러 마법사를 종료합니다.",
    img: "./images/install/07.png"
  },
  {
    step: 8,
    title: "8. 후원재단 안내 페이지 (선택)",
    desc: "오픈소스 블렌더 재단 안내 웹페이지가 열립니다. 확인 후 창을 닫거나 블렌더를 실행합니다.",
    img: "./images/install/08.png"
  },
  {
    step: 9,
    title: "9. 블렌더 첫 실행 및 기본 영문 설정 화면",
    desc: "설치된 블렌더를 처음 실행하면 영문 웰컴 스플래시(Splash Screen) 상자가 나타납니다.",
    img: "./images/install/09.png"
  },
  {
    step: 10,
    title: "10. 언어(Language) 드롭다운에서 한국어 선택",
    desc: "'Language' 드롭다운 메뉴를 클릭하고 목록에서 'Korean - 한국어'를 찾아서 선택합니다.",
    img: "./images/install/10.png"
  },
  {
    step: 11,
    title: "11. 한글 언어 설정 환경 저장",
    desc: "화면 UI 텍스트가 한국어로 변경된 것을 확인하고 하단의 파란색 '새로운 환경설정 저장' 버튼을 누릅니다.",
    img: "./images/install/11.png"
  },
  {
    step: 12,
    title: "12. 한국어 지원 스플래시 확인",
    desc: "'새로운 파일 (일반, 2D 애니메이션, 조각 등)' 메뉴가 한글로 표시되는지 검수합니다.",
    img: "./images/install/12.png"
  },
  {
    step: 13,
    title: "13. 3D 뷰포트 작업 공간 한글화 완료",
    desc: "상단 메뉴(파일, 편집, 렌더, 창, 도움말) 및 우측 아웃라이너 탭이 한국어로 변경되어 준비가 완료되었습니다!",
    img: "./images/install/13.png"
  }
];

export const coursesData = [
  {
    id: "blender-3dprint",
    title: "3D프린팅을 위한 블렌더 3D모델링 기초 과정",
    icon: "box",
    badge: "기초 / 3D프린팅",
    lessons: [
      {
        id: 1,
        title: "1차시: 블렌더 기초 & 3D 공간 이해",
        subtitle: "3D 네임텍 모델링",
        badge: "입문 / 파운데이션",
        objectType: "nametag",
        outcomes: [
          "블렌더 3D 인터페이스(Viewport, Outliner, Properties) 구조 습득",
          "3D 뷰포트 탐색(Orbit, Pan, Zoom) 및 X, Y, Z 3축 이동 지각",
          "오브젝트 모드(Object Mode)와 편집 모드(Edit Mode)의 개념 구분",
          "3D 프린팅에 적합한 기본 플레이트 및 텍스트 엠보싱(양각/음각) 기초"
        ],
        steps: [
          {
            step: 1,
            title: "1. 블렌더 주요 인터페이스 구성 요소",
            desc: "블렌더 3D 작업을 위한 화면 영역별 핵심 인터페이스 메뉴와 주요 기능들의 위치를 파악합니다.",
            subItems: [
              {
                subTitle: "1) Header (헤더 / 상단 메뉴바)",
                subDesc: "상단 메인 메뉴(파일, 편집, 렌더, 창, 도움말), 워크스페이스 탭(Layout, Modeling, Sculpting, Shading 등) 및 뷰포트 헤더 옵션(Object Mode/Edit Mode 전환, 트랜스폼 좌표계 등)의 기본 구성과 기능을 이해합니다.",
                img: "./images/header.png"
              },
              {
                subTitle: "2) 3D Viewport (3D 뷰포트)",
                subDesc: "3D 모델을 실제로 보고, 만들고, 배치하는 메인 작업 공간입니다.",
                details: [
                  "Toolbar (툴바 - 왼쪽): 이동, 회전, 스케일, 드로잉 등 자주 쓰는 도구가 모여 있습니다. (단축키: T 키로 숨기기/열기)",
                  "Sidebar (사이드바 - 오른쪽): 선택한 오브젝트의 정확한 위치(Location), 회전(Rotation), 크기(Scale) 수치 및 플러그인 메뉴가 위치합니다. (단축키: N 키로 숨기기/열기)",
                  "Navigation Gizmo (기즈모 - 우상단): 축 아이콘(X, Y, Z)을 클릭/드래그하여 정면, 측면, 탑뷰 등으로 시점을 전환합니다."
                ],
                img: "./images/viewport.png"
              },
              {
                subTitle: "3) Outliner (아웃라이너 / 우측 상단)",
                subDesc: "씬(Scene) 안에 있는 모든 요소(메시, 카메라, 조명, 컬렉션 등)를 트리 구조 목록으로 보여주는 파일 탐색기 역할을 합니다.",
                details: [
                  "Collection (컬렉션): 폴더처럼 오브젝트들을 그룹화하여 관리합니다.",
                  "표시/비활성화 (눈/모니터 아이콘): 특정 오브젝트를 뷰포트에서 숨기거나 렌더링 대상에서 제외할 수 있습니다."
                ],
                img: "./images/outliner.png",
                imgWidth: "50%"
              },
              {
                subTitle: "4) Properties (속성 창 / 우측 하단)",
                subDesc: "블렌더의 가장 중요한 세부 설정 공간입니다. 탭 아이콘을 클릭하여 영역별 수치를 조절합니다.",
                table: {
                  headers: ["아이콘 탭", "주요 기능", "설명"],
                  rows: [
                    ["Render (렌더)", "렌더 세팅", "Eevee / Cycles 엔진 선택, 화질 및 샘플링 설정"],
                    ["Output (출력)", "출력 세팅", "이미지/영상 해상도, 프레임 레이트, 저장 경로 지정"],
                    ["World (월드)", "배경 환경", "전체 씬의 배경색, HDRI 환경광 및 조명 세팅"],
                    ["Modifier (모디파이어)", "수정자 세팅", "미러(대칭), 서브디비전(부드럽게) 등 비파괴적 편집 도구 추가"],
                    ["Material (매터리얼)", "재질 세팅", "색상, 광택(Roughness), 금속성(Metallic) 등 질감 부여"]
                  ]
                },
                img: "./images/properties.png",
                imgWidth: "40%"
              },
              {
                subTitle: "5) Timeline (타임라인 / 하단)",
                subDesc: "애니메이션 프레임을 확인하고 키프레임을 제어하는 재생바입니다.",
                details: [
                  "재생/정지 버튼과 프레임 이동, 애니메이션 길이 설정이 가능합니다."
                ],
                img: "./images/timeline.png"
              },
              {
                subTitle: "6) Area Edge Options (패널 영역 분할 & 합치기)",
                subDesc: "패널과 패널 사이 경계선(Edge) 또는 헤더에서 마우스 우클릭 시 Area Edge Options 메뉴가 나타나 작업 공간을 자유롭게 분할, 합치기, 닫기 할 수 있습니다.",
                details: [
                  "수직 / 수평 분할 (Vertical / Horizontal Split): 메인 화면을 가로 또는 세로로 나누어 여러 뷰포트나 셰이더 편집 창을 동시 배치할 수 있습니다.",
                  "조인 (Join Areas): 분할된 인접 영역을 하나로 합쳐 작업 화면을 통합합니다.",
                  "영역 닫기 (Close Area): 필요하지 않은 창(예: 3D프린팅 중 불필요한 타임라인)을 닫아 뷰포트 공간을 확장합니다.",
                  "영역 교환 (Swap Areas): 서로 인접한 두 영역의 화면 위치를 맞바꿉니다.",
                  "💡 <b>레이아웃 초기화</b>: 화면이 꼬였을 땐 상단 탭 우측 <b>'+' (Add Workspace) ➔ General ➔ Layout</b> 추가 후, 기존 꼬인 Layout 탭을 우클릭하여 Delete로 삭제합니다."
                ],
                img: "./images/area_edge_options.png",
                imgWidth: "50%",
                img2: "./images/timeline_close.png",
                img2Width: "40%",
                img2Title: "타임라인 헤더/경계선 마우스 우클릭 > '영역 닫기' (실전 응용)"
              }
            ]
          },
          {
            step: 2,
            title: "2. 3D 공간 기본 개념 및 화면 탐색",
            desc: "3D 프로그램은 평면(2D) 모니터 안에서 가상의 3차원 공간을 다룹니다. 이 공간을 자유롭게 제어하기 위해 3가지 기본 작동 방식(시점, 변형, 좌표축)을 사용합니다.",
            subItems: [
              {
                subTitle: "① 공간을 바라보는 시점 조작 (Navigation)",
                subDesc: "3D 공간은 깊이(Z축)가 존재하므로, 관찰자의 카메라 위치를 자유롭게 움직여야 사물의 입체감을 파악할 수 있습니다.",
                details: [
                  "화면 회전 (Orbit): 마우스 휠 클릭 + 드래그 (MMB Drag)",
                  "화면 평행 이동 (Pan): Shift + 마우스 휠 클릭 + 드래그 (Shift + MMB Drag)",
                  "화면 확대/축소 (Zoom): 마우스 휠 스크롤 (Wheel Scroll)",
                  "<div style='font-weight: 700; color: #1e3a8a; margin-top: 0.6rem; margin-bottom: 0.2rem;'>📌 뷰포트 컨트롤 아이콘 (내비게이션 아이콘 영역)</div>",
                  "<div style='display: flex; align-items: center; gap: 1.2rem; margin: 0.4rem 0; padding: 0.6rem 0.8rem; background: #f8fafc; border-radius: 8px;'><div style='flex-shrink: 0; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 0.3rem; display: flex; align-items: center; justify-content: center;'><img src='./images/nav_controls.png' alt='내비게이션 아이콘 영역' style='max-width: 45px; width: 100%; display: block; height: auto;' /></div><div style='font-size: 0.82rem; color: #334155; line-height: 1.6;'><p style='margin-bottom: 0.3rem;'><b>Zoom In/Out (돋보기)</b>: 클릭 후 위아래로 드래그하여 뷰를 확대/축소합니다.</p><p style='margin-bottom: 0.3rem;'><b>Move the View (손)</b>: 클릭 후 드래그하여 뷰를 평행 이동(Panning)합니다.</p><p style='margin-bottom: 0.3rem;'><b>Switch the Camera View (카메라)</b>: 클릭하여 활성화된 카메라 뷰로 전환하거나 빠져나옵니다 (Numpad 0 기능).</p><p style='margin-bottom: 0;'><b>Switch the Current Perspective (그리드)</b>: 클릭하여 원근감 뷰(Perspective)와 정사영 뷰(Orthographic) 사이를 전환합니다 (Numpad 5 기능).</p></div></div>"
                ]
              },
              {
                subTitle: "② 3차원 공간에서의 3대 기본 변형 (Transform)",
                subDesc: "3D 공간 안의 모든 물체는 위치, 방향, 크기라는 3가지 기본 요소로 존재합니다.",
                details: [
                  "이동 (Position / Move): G (Grab)",
                  "회전 (Rotation): R (Rotate)",
                  "크기 조절 (Scale): S (Scale)"
                ]
              },
              {
                subTitle: "③ 3축 공간 좌표계 고정 (Transform Axis)",
                subDesc: "3D 공간은 X(가로/빨강), Y(세로/초록), Z(높이/파랑) 3개 축으로 구성됩니다. 원하는 방향으로만 정확히 움직이려면 변형 단축키 입력 후 축 기호를 지정합니다.",
                details: [
                  "X축 고정: 변형 단축키(G/R/S) 누른 후 X",
                  "Y축 고정: 변형 단축키(G/R/S) 누른 후 Y",
                  "Z축 고정: 변형 단축키(G/R/S) 누른 후 Z (예: G ➔ Z 입력 시 위/아래 수직 방향으로만 이동)",
                  "<div style='display: flex; align-items: center; gap: 1rem; margin-top: 0.6rem;'><div style='flex: 1; max-width: 60%; border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa;'><img src='./images/transform_3d.png' alt='이동 예시' style='width: 100%; display: block; height: auto; object-fit: contain;' /></div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>이동 예시</div></div>",
                  "<div style='display: flex; align-items: center; gap: 1rem; margin-top: 0.6rem;'><div style='flex: 1; max-width: 60%; border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa;'><img src='./images/transform_rotate.png' alt='회전 예시' style='width: 100%; display: block; height: auto; object-fit: contain;' /></div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>회전 예시</div></div>",
                  "<div style='display: flex; align-items: center; gap: 1rem; margin-top: 0.6rem;'><div style='flex: 1; max-width: 60%; border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa;'><img src='./images/transform_scale.png' alt='크기 조절 예시' style='width: 100%; display: block; height: auto; object-fit: contain;' /></div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>크기 조절 예시</div></div>"
                ]
              },
              {
                subTitle: "④ 공간 탐색 및 오브젝트 하부 구조",
                subDesc: "가상 공간에 오브젝트를 생성하고 조작 모드를 전환합니다.",
                details: [
                  "오브젝트 추가 (Create): Shift + A (Add) — 가상 공간에 새로운 3D 도형 생성",
                  "작업 모드 전환 (Mode): Tab — 전체 형태 조작(Object Mode) ↔ 세부 점·선·면 편집(Edit Mode)",
                  "<div style='display: flex; gap: 1.5rem; margin-top: 0.6rem;'><div style='flex: 1; max-width: 48%;'><div style='border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa; margin-bottom: 0.4rem;'><img src='./images/object_mode_setup.png' alt='오브젝트 모드 설정' style='width: 100%; height: 180px; display: block; object-fit: contain;' /></div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>오브젝트 모드 설정</div></div><div style='flex: 1; max-width: 48%;'><div style='border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa; margin-bottom: 0.4rem;'><img src='./images/edit_mode_setup.png' alt='에디트 모드 설정' style='width: 100%; height: 180px; display: block; object-fit: contain;' /></div><div style='font-size: 0.9rem; font-weight: 700; color: #1e3a8a;'>에디트 모드 설정</div></div></div>"
                ]
              }
            ]
          },
          {
            step: 3,
            title: "3. 3D 커서(3D Cursor) 개념 및 위치 지정",
            desc: "3D 커서는 새로운 오브젝트(Shift + A)가 생성되는 기준점이자 회전/변형의 중심축 역할을 하는 중요한 3차원 포인터입니다.",
            subItems: [
              {
                subTitle: "1) 3D 커서 위치 이동 및 리셋 방법",
                subDesc: "원하는 지점에 정확하게 오브젝트를 배치하거나 중심점을 변경할 때 3D 커서를 사용합니다.",
                details: [
                  "마우스 자유 이동: Shift + Right Click (Shift + 우클릭)으로 클릭한 3차원 지점에 3D 커서를 즉시 배치합니다.",
                  "커서 스냅 파이 메뉴 (Shift + S): 파이 메뉴를 호출하여 다양한 기준점으로 3D 커서 및 선택 항목을 스냅 이동시킵니다.",
                  "<div style='border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa; max-width: 534px; margin: 0.5rem 0;'><img src='./images/cursor_pie_menu.png' alt='Shift + S 커서 스냅 파이 메뉴' style='width: 100%; display: block; height: auto; object-fit: contain;' /></div>",
                  "<div style='background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 0.9rem; margin: 0.5rem 0; font-size: 0.82rem; color: #1e3a8a; line-height: 1.6; display: inline-block; width: fit-content; max-width: 100%;'><p style='margin-bottom: 0.3rem;'><b>Cursor to Selected</b>: 현재 선택한 오브젝트(또는 점/선/면)의 정중앙으로 커서 이동</p><p style='margin-bottom: 0.3rem;'><b>Cursor to World Origin</b>: 3D 공간의 절대 원점(0, 0, 0)으로 커서 이동</p><p style='margin-bottom: 0;'><b>Cursor to Active</b>: 마지막으로 선택한(활성화된) 요소 위치로 이동</p></div>",
                  "수치(좌표)를 직접 입력해서 이동: 정확한 X, Y, Z 좌표에 커서를 배치해야 할 때 사용합니다.",
                  "<div style='margin-left: 0.5rem; margin-top: 0.2rem; color: #475569; font-size: 0.81rem;'>(N 키를 누르고 ➔ 오른쪽 사이드바(Sidebar) ➔ View 탭 ➔ 3D Cursor 항목에서 Location X, Y, Z 수치 직접 입력)</div>",
                  "<div style='border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1; padding: 0.3rem; background: #fafafa; max-width: 210px; margin: 0.5rem 0 0.5rem 0.5rem;'><img src='./images/cursor_location_sidebar.png' alt='사이드바 View 탭 3D 커서 수치 입력' style='width: 100%; display: block; height: auto; object-fit: contain;' /></div>",
                  "원점 리셋 & 뷰 정렬 (Shift + C): 3D 커서를 좌표계 원점(0, 0, 0)으로 복구하고 전체 오브젝트가 보이도록 화면을 정렬합니다."
                ]
              }
            ]
          },
          {
            step: 4,
            title: "4. 네임택 베이스 플레이트 생성",
            desc: "Add > Mesh > Cube(Shift + A)를 추가하고, Transform 단축키 S (Scale)로 [X: 70mm, Y: 30mm, Z: 2mm] 크기의 플레이트 제작"
          },
          {
            step: 5,
            title: "5. 스트랩 구멍 뚫기 & 베벨(Bevel) 적용",
            desc: "Edit Mode(Tab)에서 모서리를 선택하고 Ctrl + B로 모서리를 부드럽게 깎아 손상을 방지하며 스트랩용 원형 구멍 뚫기"
          },
          {
            step: 6,
            title: "6. 텍스트 추가 및 3D 솔리드화",
            desc: "Add > Text로 텍스트 오브젝트 생성 후 원하는 이름 입력, Geometry Extrude로 2mm 두께감 부여 후 플레이트에 결합"
          }
        ],
        hotkeys: [
          { key: "MMB Drag", desc: "3D 화면 회전 (Orbit)" },
          { key: "Shift + MMB", desc: "3D 화면 평행 이동 (Pan)" },
          { key: "G / R / S", desc: "이동(Grab) / 회전(Rotate) / 크기(Scale)" },
          { key: "Tab", desc: "Object Mode ↔ Edit Mode 전환" },
          { key: "Shift + A", desc: "새로운 오브젝트 추가 메뉴" },
          { key: "Ctrl + B", desc: "모서리 베벨(Bevel) 깎기" },
          { key: "~ `", desc: "뷰포트 바로가기 파이 메뉴" },
          { key: "Numpad 1 / 3 / 7 / 0", desc: "정면 / 측면 / 상면 / 카메라 뷰 전환" },
          { key: "T / N", desc: "툴바(T) / 사이드바(N) 패널 켜기·끄기" },
          { key: "Z", desc: "뷰포트 쉐이딩 모드 팝업 변경" },
          { key: "Alt + G / R / S", desc: "이동 / 회전 / 축척 변형 초기화" },
          { key: "X / Y / Z", desc: "X, Y, Z 특정 축 방향 고정 변형" },
          { key: "Shift + Left Click", desc: "여러 오브젝트/요소 다중 선택" },
          { key: "Shift + Right Click", desc: "3D 커서 위치 설정" },
          { key: "Del / X", desc: "선택한 오브젝트 삭제" },
          { key: "A", desc: "전체 선택 (Select All)" },
          { key: "Ctrl + J / P", desc: "오브젝트 결합(Ctrl+J) / 에디트 분리(P)" },
          { key: "1 / 2 / 3", desc: "에디트 모드 점/선/면 선택 모드 변경" },
          { key: "E / I / L / Ctrl+R", desc: "돌출(E) / 인셋(I) / 연결선택(L) / 루프컷(Ctrl+R)" }
        ],
        printTips: [
          "텍스트 양각 높이는 1.1mm 이상 유지해야 FDM 3D프린터 출력 시 글자가 선명합니다.",
          "스트랩 구멍 직경은 연결할 끈이나 고리의 지름을 참조하여 설정하며, 노즐 출력 오차를 고려해 3mm 이상으로 여유를 두는 것이 좋습니다."
        ]
      },
      {
        id: 2,
        title: "2차시: 변형 & 모디파이어 활용",
        subtitle: "스마트폰 거치대 모델링",
        badge: "기초 실용 / 모디파이어",
        objectType: "phone_stand",
        outcomes: [
          "불리언(Boolean) 모디파이어를 이용한 차집합(Difference) 결합 원리 이해",
          "점(Vertex), 선(Edge), 면(Face) 선택 모드 및 Extrude(돌출 E), Inset(삽입 I) 실습",
          "스마트폰 경사각(60°~70°) 및 거치 홈 정밀 수치 모델링",
          "기본 재질 색상 부여 및 매터리얼 매핑 시각화"
        ],
        steps: [
          {
            step: 1,
            title: "거치대 메인 블록 바디 조형",
            desc: "기본 큐브에서 시작하여 원하는 높이(80mm)와 폭(65mm)으로 스케일 지정 후 스마트폰 받침대 경사면 형성"
          },
          {
            step: 2,
            title: "Extrude(E) & Loop Cut(Ctrl+R)으로 슬롯 제작",
            desc: "Ctrl + R로 분할선을 추가하고, 스마트폰 두께(12mm~15mm)에 맞춰 받침 홈을 돌출 및 파내기"
          },
          {
            step: 3,
            title: "Boolean 모디파이어로 케이블 홀 타공",
            desc: "충전 케이블 통과용 실린더(Cylinder)를 생성하고 거치대에 Boolean (Difference) 적용 후 Apply"
          },
          {
            step: 4,
            title: "모서리 챔퍼링 및 하중 안정성 검토",
            desc: "3D 프린터 출력 시 출력물이 넘어가지 않도록 무게중심 테스트 및 모서리 베벨 정리"
          }
        ],
        hotkeys: [
          { key: "E", desc: "면/선/점 돌출 (Extrude)" },
          { key: "I", desc: "면 내부 삽입 (Inset Faces)" },
          { key: "Ctrl + R", desc: "루프 컷 (Loop Cut & Slide)" },
          { key: "1 / 2 / 3", desc: "Edit mode에서 점/선/면 선택 모드 변경" },
          { key: "Shift + Z", desc: "와이어프레임(Wireframe) 뷰 모드 켜기/끄기" },
          { key: "Alt + Left Click", desc: "연속된 루프 Edge 선택" }
        ],
        printTips: [
          "스마트폰 거치대는 서포터(Support) 없이 출력할 수 있도록 경사각을 45도 이하로 설계하는 것이 유리합니다.",
          "충전 케이블 구멍 R 값은 최소 R5mm 이상을 권장합니다.",
          "내부 채우기(Infill)는 15%~20% Grid 패턴으로 출력 시 충분한 강도를 확보할 수 있습니다."
        ]
      },
      {
        id: 3,
        title: "3차시: 3D 캐릭터 & 스컬프팅 입문",
        subtitle: "미니 캐릭터 피규어 모델링",
        badge: "응용 / 미러 & 스컬프팅",
        objectType: "mini_character",
        outcomes: [
          "Mirror Modifier(미러 모디파이어)를 활용한 대칭 오브젝트 실시간 조형",
          "Subdivision Surface(세분화 모디파이어)로 매끄러운 캐릭터 바디 형성",
          "Sculpt Mode(스컬프트 모드) 전환 및 Clay, Grab, Smooth 브러시 작동 원리 체득",
          "3D 피규어 출력을 위한 독립된 파트 통합 및 Solidify 체크"
        ],
        steps: [
          {
            step: 1,
            title: "구(UV Sphere) 기반 미니 캐릭터 머리/몸통 가이드",
            desc: "UV Sphere 추가 후 Mirror Modifier를 켜서 좌우 대칭 기준점(X축) 설정"
          },
          {
            step: 2,
            title: "팔, 다리, 귀 부속품 대칭 모델링",
            desc: "Extrude와 Scale을 조절하여 귀여운 미니 피규어 비율(2등신 캐릭터)의 팔다리와 귀 구성"
          },
          {
            step: 3,
            title: "Sculpt Mode 브러시 조형",
            desc: "Grab 브러시(G)로 유기적인 곡선 표면 변형, Smooth 브러시(Shift)로 표면 다듬기"
          },
          {
            step: 4,
            title: "일체형 메쉬(Join Ctrl+J) 및 바닥 받침대 통합",
            desc: "3D 프린팅 시 피규어가 안정적으로 서 있도록 서포트용 미니 평평한 베이스 플레이트 통합"
          }
        ],
        hotkeys: [
          { key: "Ctrl + J", desc: "선택한 여러 오브젝트 하나로 결합 (Join)" },
          { key: "Ctrl + 2", desc: "Subdivision Surface Level 2 적용" },
          { key: "G (Sculpt)", desc: "Grab 브러시 - 메쉬 당기기" },
          { key: "Shift (Hold)", desc: "Sculpt 중 거친 표면 부드럽게 (Smooth)" },
          { key: "Ctrl (Hold)", desc: "브러시 기능 반대로 적용 (Invert)" },
          { key: "F / Shift + F", desc: "브러시 크기(Radius) / 강도(Strength) 조절" }
        ],
        printTips: [
          "캐릭터의 튀어나온 팔이나 귀 부분은 FDM 3D 프린팅 시 서포터(Support) 생성이 필수적입니다.",
          "메시 내부에 뚫린 빈 공간이 있으면 3D 슬라이서에서 슬라이싱 오류가 발생하므로 Watertight인지 확인하세요.",
          "스컬프팅 후 고용량 메쉬는 Decimate 모디파이어로 폴리곤 수를 줄여 STL 파일 용량을 최적화하세요."
        ]
      },
      {
        id: 4,
        title: "4차시: 생성형 AI 3D & 프린팅 최적화",
        subtitle: "3D프린팅용 장식 소품 제작",
        badge: "심화 / AI 3D & 실전 프린팅",
        objectType: "ai_ornament",
        outcomes: [
          "Text-to-3D / Image-to-3D Generative AI 도구를 이용한 3D 메쉬 생성 프로세스 이해",
          "AI가 생성한 3D 메쉬의 3D 프린팅용 수리(Mesh Repair & Topology Cleanup)",
          "Non-Manifold(비매니폴드 점/선) 자동 감지 및 3D Print Toolbox 애드온 활용",
          "G-code 변환 슬라이서(Cura, PrusaSlicer) 연동 및 실제 출력 최적화 설정 완료"
        ],
        steps: [
          {
            step: 1,
            title: "Generative AI 도구로 3D 기본 모델 프롬프트 생성",
            desc: "프롬프트 입력(예: 'Intricate Geometric Lotus Sculpture') 후 GLB/OBJ 파일 다운로드"
          },
          {
            step: 2,
            title: "블렌더 임포트 및 3D Print Toolbox 에러 검사",
            desc: "Import > GLB 후 'Check All'을 눌러 Non-manifold Edge, Bad Contig. Edges, Intersect Face 검출"
          },
          {
            step: 3,
            title: "Remesh & Solidify로 두께 및 와이어 프레임 강화",
            desc: "AI 메쉬의 벽 두께가 너무 얇은 구역에 Solidify를 주어 3D 프린터 출력 도중 파손 방지"
          },
          {
            step: 4,
            title: "STL 내보내기 & 슬라이싱 세팅 점검",
            desc: "File > Export > Stl (.stl) 선택, Selection Only 및 Apply Modifiers 체크 후 슬라이서로 전송"
          }
        ],
        hotkeys: [
          { key: "Shift + Ctrl + Alt + M", desc: "Non-Manifold(구멍 난 메쉬) 전체 선택" },
          { key: "Alt + F", desc: "뚫린 구멍 메우기 (Fill Hole)" },
          { key: "M", desc: "중복된 점 합치기 (Merge Vertices)" },
          { key: "N Key Panel", desc: "N키로 3D Print Toolbox 탭 열기" },
          { key: "F3", desc: "전체 기능 및 애드온 퀵 검색창" }
        ],
        printTips: [
          "AI 모델은 미세한 얇은 섬유 구조가 포함될 수 있습니다. 3D 프린터 노즐 두께(0.4mm) 이상의 최소 벽두께(1.0mm)를 유지하세요.",
          "출력 전 슬라이서 레이어 뷰(Layer View)에서 허공에 출력되는 공중 레이어가 없는지 층별 축소 검사를 시행합니다.",
          "라이트 레진(SLA) 프린팅 시에는 수축을 고려한 배수 구멍(Drain Hole)을 제작해 주세요."
        ]
      }
    ]
  }
];

export const printingChecklistData = [
  {
    title: "1. Watertight (비매니폴드 에러 없음)",
    desc: "메쉬 내부가 완전히 닫혀 물이 새지 않는 3D 다중체 구조여야 합니다.",
    status: "pass"
  },
  {
    title: "2. Minimum Wall Thickness (최소 벽 두께)",
    desc: "FDM 프린터 기준 최소 1.2mm, SLA 기준 0.8mm 이상의 두께를 보장해야 파손되지 않습니다.",
    status: "pass"
  },
  {
    title: "3. Overhang Angle (서포터 경사각)",
    desc: "45도 이상의 급격한 돌출 부위는 Support 구조물을 추가해야 흘러내리지 않습니다.",
    status: "warning"
  },
  {
    title: "4. Face Normals Direction (법선 방향 정렬)",
    desc: "모든 면의 노멀 방향이 외부(Outside)를 향하도록 recalculate(Shift+N) 되어야 합니다.",
    status: "pass"
  }
];
