flowchart-elk TD
    Frontend(Frontend)
    API(Backend API)
    DB(CNPG Database)
    NATS{NATS Queue}
    Operator(K8s Operator)
    CNPG_Operator(CNPG Operator)
    K8sRes(K8s Resources)
    K8sCNPG1(CNPG 1)
    K8sCNPG2(CNPG 2)



    style DB fill:#f9f,stroke:#333,stroke-width:2px
    style NATS fill:#ff9,stroke:#333,stroke-width:2px
    style Operator fill:#9cf,stroke:#333,stroke-width:2px

    
    Frontend -- "/api (Action)" --> API
    API -- "Persist State (Payment etc.)" --> DB
    API -- "Publish Event (Created/Deleted)" --> NATS
    NATS -- "Consume Message" --> Operator

    Operator -- "Instrucuts" --> CNPG_Operator
    CNPG_Operator -- "Reconcile State" --> K8sRes
    CNPG_Operator -- "Reconcile State" --> K8sCNPG1
    CNPG_Operator -- "Reconcile State" --> K8sCNPG2

    subgraph K8s_OwnCluster [Management Kubernetes Cluster]
        Frontend
        API
        DB
        NATS
    end 
    subgraph K8s_Cluster [Workload Kubernetes Cluster]
        Operator
        CNPG_Operator
        K8sRes
        K8sCNPG1
        K8sCNPG2
    end
