flowchart-elk TD
    Frontend(Frontend)
    API(Backend API)
    DB(CNPG Database)
    NATS{NATS Queue}
    Custom_Controller(Custom Controller)
    CNPG_Operator(CNPG Operator)
    K8sRes(K8s Resources)
    K8sCNPG1(CNPG 1)
    K8sCNPG2(CNPG 2)



    style DB fill:#f9f,stroke:#333,stroke-width:2px
    style NATS fill:#ff9,stroke:#333,stroke-width:2px

    style k8s_operator fill:#9cf,stroke:#333,stroke-width:2px

    
    Frontend -- "/api (Action)" --> API
    API -- "Persist State (Payment etc.)" --> DB
    API -- "Publish Event (Created/Deleted)" --> NATS
    API -- "Read Status Events" --- NATS


    NATS -- "Consume Message" --> IA
    NATS -- "Send Status" --- SR

    Custom_Controller --> SR
    IA --> Custom_Controller

    Custom_Controller -- "Instrucuts & Reconciles" --> CNPG_Operator
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
        subgraph k8s_operator [K8s Custom Operator]
            IA(Ingestion Agent)
            Custom_Controller
            SR(Status Reporter)
        end

        CNPG_Operator
        K8sRes
        K8sCNPG1
        K8sCNPG2
    end
