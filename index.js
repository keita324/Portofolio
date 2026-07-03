// ==========================================================
// Muroya Keita — Portfolio Scripts
// ==========================================================

// ---------- プロジェクトデータ ----------
const projectData = {
    cartpole: {
        title: "カートポールでのグループ学習検証",
        image: "img/cartpole.webp",
        description: "人間のグループ学習を模した深層強化学習AIシステム",
        motivation: "人間の協調学習からヒントを得て、計算能力の異なる複数のAIエージェントが協力することで、計算効率と学習性能の両立が可能になるという仮説を検証しました。",
        motivationLink: { url: "https://drive.google.com/file/d/1GItqbs9fV0m97421-SUU1qv550ewB7aP/view", label: "研究論文を見る" },
        technical: "PyTorchを使用した深層強化学習モデルを実装。隠れ層のニューロン数が異なる3つのエージェント（Agent64、Agent32、Agent16）を導入し、共有経験リプレイメモリと適応的エージェント選択機構を組み合わせたグループ学習システムを構築しました。",
        outcome: "特に低性能エージェント（Agent16）が個別学習時の93.3ステップから、グループ学習により184.4ステップへと約2倍の性能向上を実現。高性能エージェントの性能を阻害することなく、相乗効果を確認できました。",
        tech_stack: ["Python", "PyTorch", "OpenAI Gym", "深層強化学習", "DQN"],
        github: null,
        note: "※研究論文として発表予定のため、ソースコードは非公開"
    },
    cartpole_q: {
        title: "グループ学習の報酬分析（国際学会）",
        image: "img/cartpole_q.webp",
        description: "報酬ヒートマップによるグループ学習メカニズムの詳細分析",
        motivation: "国際学会での発表に向けて、グループ学習がなぜ効果的なのかをより深く理解するため、各エージェントがどの状態でどれだけの報酬を獲得しているかを視覚的に分析しました。",
        motivationLink: { url: "https://drive.google.com/file/d/1grWAK7gslhhn41OCMu38PlnLfcjU8GxZ/view?usp=sharing", label: "英語論文を見る" },
        technical: "matplotlib、seaborn、NumPyを使用して報酬のヒートマップ可視化システムを構築。CartPoleの状態空間を離散化し、各状態における累積報酬を色の濃淡で表現しました。",
        outcome: "グループ学習時に低性能エージェントが高性能エージェントの学習データから恩恵を受けている具体的な状態領域を特定。棒の角度が±10度以内の微妙なバランス制御において優位性を発見しました。",
        tech_stack: ["Python", "PyTorch", "matplotlib", "seaborn", "NumPy"],
        github: null,
        note: "※国際学会発表用研究のため、ソースコードは非公開"
    },
    learning_app: {
        title: "学習管理アプリ（DMM WEBCAMP）",
        image: "img/dmm.webp",
        description: "プログラミング学習の離脱率を劇的に改善した学習管理アプリ",
        motivation: "コロナ禍でリモート授業に変わったことで、生徒の離脱率が10.4%から34%まで急増。生徒の悩みを解決し、プログラミング本来の楽しさを届けたいと考えました。",
        motivationLink: { url: "https://drive.google.com/file/d/1N3N7Z5tx-lC0JO2I4vafkOax4_iTprR-/view", label: "企画発表スライドを見る" },
        technical: "Ruby on RailsとJavaScriptを使用したWebアプリケーション。学習進捗の可視化機能、ヒント表示機能、小さな確認問題の配置など、UX設計を重視した開発を行いました。",
        outcome: "離脱率を34%から11.2%まで劇的に改善（対面時代と同等レベル）。プロジェクトマネージャーとして5人チームを率い、技術とマネジメントの両面でスキルを向上させました。",
        tech_stack: ["Ruby on Rails", "JavaScript", "HTML/CSS", "MySQL"],
        github: null,
        note: "※DMM WEBCAMP社内プロジェクトのため、ソースコードは非公開"
    },
    mario: {
        title: "マリオAI（深層強化学習）",
        image: "img/mario.webp",
        description: "深層強化学習を用いてスーパーマリオをプレイするAIを開発",
        motivation: "ゲームAIの可能性を追求したいという思いから、まずは馴染みのあるマリオで強化学習に挑戦。プレイヤーの行動を学習させることで、人間らしい動きを実現することを目指しました。",
        technical: "PyTorchを使用した深層強化学習モデルの実装。Environment設計からReward設計まで、様々な工夫を重ねました。特に、正確な状態認識のための画面処理や、効果的な報酬設計に注力しました。",
        outcome: "ステージクリアまでの最適な行動を学習させることに成功。障害物の回避や適切なジャンプタイミングの習得など、人間らしいプレイスタイルを実現できました。",
        tech_stack: ["Python", "PyTorch", "OpenAI Gym", "深層強化学習", "Computer Vision"],
        github: "https://github.com/keita324/MarioAI/tree/main"
    },
    luigi: {
        title: "ルイージAI（深層強化学習）",
        image: "img/luigi.webp",
        description: "観察学習による協調型ゲームAIの研究開発",
        motivation: "「人間は他者の行動を観察することで効率的に学習できる」という仮説のもと、AIでその検証を試みました。具体的には、実際にプレイするマリオAIと、その行動を観察するだけのルイージAIを作成し、協調学習の可能性を探究しています。",
        technical: "PyTorchによる深層強化学習モデルを実装。特に注力した点は、マリオの行動を正確に認識するための画面処理システム、観察学習を可能にする報酬設計、複数エージェント間での学習情報の共有機構などです。",
        outcome: "マリオAIの単独学習では1000回の試行で到達できなかったステージを、ルイージAIとの協調により700回の試行でクリア達成。観察による学習が、試行錯誤による直接学習を補完できることを実証しました。",
        tech_stack: ["Python", "PyTorch", "OpenAI Gym", "深層強化学習", "Computer Vision"],
        github: null,
        note: "※他研究室との共同研究のため、ソースコードは非公開"
    },
    car: {
        title: "自動運転AI（深層強化学習）",
        image: "img/car.webp",
        description: "人間の運転行動を模倣する自動運転AIの研究開発",
        motivation: "自動運転技術の課題の一つに「乗客に優しい運転の実現」があります。既存の強化学習による自動運転AIは、目的地への到達は実現できても、急ブレーキや急カーブなど乗客に負担をかける運転になりがちでした。",
        technical: "PyTorchによる深層強化学習モデルを実装。人間の運転データからの効率的な学習メカニズム、乗り心地を考慮した報酬設計、加速度変化の最小化を考慮した行動決定機構に注力しました。",
        outcome: "Virtual Motorsport Labさまと共同研究を予定。VML自動運転ハッカソンにも出場しました。",
        tech_stack: ["Python", "PyTorch", "深層強化学習", "模倣学習", "Computer Vision"],
        github: null,
        note: "※企業との共同研究のため、ソースコードは非公開"
    },
    nagano: {
        title: "ECサイト（スイーツ販売）",
        image: "img/nagano.webp",
        description: "長野県の特産品を扱うECサイトの開発",
        motivation: "実践的なWebアプリケーション開発の経験を積むため、実際のビジネスに近い形でのECサイト開発に挑戦しました。",
        technical: "Ruby on Railsを使用したフルスタック開発。ユーザー管理、商品管理、注文処理など、ECサイトに必要な機能を実装。特に、カート機能やお気に入り機能の実装に工夫を凝らしました。",
        outcome: "基本的なECサイトの機能を備えた完成度の高いサイトを構築。レスポンシブデザインにも対応し、使いやすいUIを実現しました。",
        tech_stack: ["HTML/CSS", "Ruby on Rails", "Bootstrap", "jQuery", "MySQL"],
        github: "https://github.com/keita324/ECsite"
    },
    bookers: {
        title: "Bookers（本のレビューサイト）",
        image: "img/bookers2.webp",
        description: "本の感想を共有できるレビューサイト",
        motivation: "読書好きのコミュニティを作りたいと考え、本の感想を気軽にシェアできるプラットフォームを開発しました。",
        technical: "Ruby on Railsでの基本的なCRUD機能に加え、ユーザーフォロー機能やいいね機能を実装。また、非同期通信を活用して、スムーズな操作感を実現しました。",
        outcome: "読書記録を簡単に管理でき、他のユーザーと感想を共有できるコミュニティサイトが完成しました。",
        tech_stack: ["HTML/CSS", "Ruby on Rails", "jQuery", "Bootstrap"],
        github: "https://github.com/keita324/bookers2-muro"
    },
    meshiterro: {
        title: "meshiterro（食事投稿サイト）",
        image: "img/meshittero.webp",
        description: "食事の写真と感想を共有できるSNSサイト",
        motivation: "グルメ好きが気軽に情報交換できるプラットフォームを作りたいと考え、開発に着手しました。",
        technical: "画像アップロード機能、位置情報の管理、タグ付け機能などを実装。また、検索機能を充実させ、ユーザーが求める情報に素早くアクセスできるようにしました。",
        outcome: "食事の記録と共有が簡単にできるSNSサイトを構築。ユーザー同士のインタラクションを促進する機能も実装しました。",
        tech_stack: ["HTML/CSS", "Ruby on Rails", "Bootstrap"],
        github: "https://github.com/keita324/meshiterro"
    }
};

// ---------- モーダル ----------
const modal = document.getElementById('projectModal');
const modalBody = modal.querySelector('.modal-body');
const githubIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>';

function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    const motivationLink = project.motivationLink
        ? ` <a href="${project.motivationLink.url}" target="_blank" rel="noopener">${project.motivationLink.label} ↗</a>`
        : '';

    const links = project.github
        ? `<a href="${project.github}" target="_blank" rel="noopener" class="github-link">${githubIcon}GitHubで見る</a>`
        : `<p class="github-note">${project.note}</p>`;

    modalBody.innerHTML = `
        <div class="project-hero">
            <img src="${project.image}" alt="${project.title}">
            <h2>${project.title}</h2>
        </div>
        <div class="project-details">
            <p class="project-desc">${project.description}</p>
            <div class="project-section">
                <h3>開発の動機</h3>
                <p>${project.motivation}${motivationLink}</p>
            </div>
            <div class="project-section">
                <h3>技術的なポイント</h3>
                <p>${project.technical}</p>
            </div>
            <div class="project-section">
                <h3>成果</h3>
                <p>${project.outcome}</p>
            </div>
            <div class="project-section">
                <h3>使用技術</h3>
                <div class="tech-stack">
                    ${project.tech_stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            <div class="project-links">${links}</div>
        </div>
    `;
    modalBody.scrollTop = 0;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

document.querySelectorAll('.work-item[data-project]').forEach(item => {
    item.addEventListener('click', () => openModal(item.dataset.project));
});

modal.querySelector('.close-button').addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
});

// ---------- スクロールリビール ----------
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---------- ヘッダー & スクロール進捗(rAFで間引き) ----------
const header = document.querySelector('.site-header');
const progressBar = document.querySelector('.scroll-progress');
let ticking = false;

function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 60);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
    }
}, { passive: true });

onScroll();

// ---------- モバイルメニュー: リンククリックで閉じる ----------
const menuCheck = document.getElementById('menu-check');
document.querySelectorAll('.mobile-menu a, .nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuCheck.checked = false;
    });
});
