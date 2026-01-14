flowchart-elk TB
    subgraph keeper-org[Keeper Org]
        kac(Keeper API Contracts)
        kf(Keeper Frontend)
        kb(Keeper Backend)
        kw(Keeper Wiki)

        kac --> |Distributes openAPI| kf
        kac --> |Distributes openAPI & asyncAPI specs| kb
        kac --> kw
    end

    subgraph "Lucen HQ"
        inf(Infrastrucutre)
        cc(Cluster Config)
    end

    inf -.-> |Provisions Compute Infrastrucutre | keeper-org
    cc -.->  kf
    cc -.-> | Deploys | kb
